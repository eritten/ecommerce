from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from django.db.models import Avg
from .models import Category, Attribute, Store, Product, Review, ProductImage
from .serializers import (
    CategorySerializer, AttributeSerializer, StoreSerializer,
    ProductSerializer, ProductDetailSerializer, ProductListSerializer,
    ReviewSerializer, CategoryProductSerializer
)
import django_filters
from .recommendations import find_similar_products
from .image_recommendation import find_similar_products_by_image


class CategoryFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr='icontains')
    parent = django_filters.NumberFilter(field_name='parent__id')

    class Meta:
        model = Category
        fields = ['name', 'parent']


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = CategoryFilter
    search_fields = ['name']
    ordering_fields = ['name']

    def get_serializer_class(self):
        if self.action == 'products':
            return CategoryProductSerializer
        return self.serializer_class

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        serializer = CategoryProductSerializer(category)
        return Response(serializer.data)


class AttributeViewSet(viewsets.ModelViewSet):
    queryset = Attribute.objects.all()
    serializer_class = AttributeSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['name']
    ordering_fields = ['name']


class StoreFilter(django_filters.FilterSet):
    min_rating = django_filters.NumberFilter(field_name="rating", lookup_expr='gte')
    max_rating = django_filters.NumberFilter(field_name="rating", lookup_expr='lte')

    class Meta:
        model = Store
        fields = ['name', 'min_rating', 'max_rating']


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = StoreFilter
    search_fields = ['name', 'description']
    ordering_fields = ['name', 'rating']

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        store = self.get_object()
        products = store.products.all()
        serializer = ProductListSerializer(products, many=True, context={'request': request})
        return Response(serializer.data)


class ProductFilter(django_filters.FilterSet):
    min_price = django_filters.NumberFilter(field_name="price", lookup_expr='gte')
    max_price = django_filters.NumberFilter(field_name="price", lookup_expr='lte')
    category = django_filters.NumberFilter(field_name="category__id")
    store = django_filters.NumberFilter(field_name="store__id")

    class Meta:
        model = Product
        fields = ['name', 'category', 'store', 'min_price', 'max_price']


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_class = ProductFilter
    search_fields = ['name', 'description', 'category__name', 'store__name']
    ordering_fields = ['name', 'price', 'category__name', 'store__name']

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer
        elif self.action in ['retrieve', 'create', 'update', 'partial_update']:
            return ProductDetailSerializer
        return ProductSerializer

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        product = serializer.save()
        images_data = self.request.FILES.getlist('images')
        for image_data in images_data:
            ProductImage.objects.create(product=product, image=image_data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        if getattr(instance, '_prefetched_objects_cache', None):
            instance._prefetched_objects_cache = {}

        return Response(serializer.data)

    def perform_update(self, serializer):
        product = serializer.save()
        images_data = self.request.FILES.getlist('images')
        if images_data:
            product.images.all().delete()  # Remove existing images
            for image_data in images_data:
                ProductImage.objects.create(product=product, image=image_data)

    @action(detail=True, methods=['get'])
    def reviews(self, request, pk=None):
        product = self.get_object()
        store = product.store
        reviews = store.reviews.all()
        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def recommend(self, request, pk=None):
        product = self.get_object()
        similar_products = find_similar_products(product)
        serializer = ProductSerializer(similar_products, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['get'])
    def recommend_by_image(self, request, pk=None):
        product = self.get_object()
        similar_products = find_similar_products_by_image(product)
        serializer = ProductSerializer(similar_products, many=True)
        return Response(serializer.data)


class ReviewFilter(django_filters.FilterSet):
    product = django_filters.NumberFilter(field_name="product__id")
    user = django_filters.NumberFilter(field_name="user__id")
    rating = django_filters.NumberFilter()

    class Meta:
        model = Review
        fields = ['product', 'user', 'rating']


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_class = ReviewFilter  # Ensure this matches your filterset class name
    ordering_fields = ['created_at', 'rating']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        # Recalculate the average rating for the store
        product = serializer.validated_data['product']
        store = product.store
        avg_rating = Review.objects.filter(product__store=store).aggregate(Avg('rating'))['rating__avg']
        store.rating = avg_rating
        store.save()
