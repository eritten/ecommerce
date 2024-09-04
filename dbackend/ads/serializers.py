from rest_framework import serializers
from .models import Category, Attribute, Store, Product, ProductAttribute, Review, ProductImage
from django.contrib.auth import get_user_model
from users.serializers import UserSerializer

User = get_user_model()


class AttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attribute
        fields = ['id', 'name']


class CategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.SerializerMethodField()
    attributes = AttributeSerializer(many=True, read_only=True)
    parent = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'parent', 'subcategories', 'attributes']

    def get_subcategories(self, obj):
        return CategorySerializer(obj.subcategories.all(), many=True).data

    def get_parent(self, obj):
        if obj.parent:
            return {'id': obj.parent.id, 'name': obj.parent.name}
        return None


class ReviewSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    sentiment = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = ['id', 'user', 'rating', 'comment', 'created_at', 'sentiment']

    def get_sentiment(self, obj):
        return obj.get_sentiment()


class StoreSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    owner = UserSerializer(read_only=True)
    products_count = serializers.SerializerMethodField()

    class Meta:
        model = Store
        fields = ['id', 'name', 'description', 'owner', 'rating', 'reviews', 'products_count']

    def get_products_count(self, obj):
        return obj.products.count()


class ProductAttributeSerializer(serializers.ModelSerializer):
    attribute_name = serializers.CharField(source='attribute.name', read_only=True)

    class Meta:
        model = ProductAttribute
        fields = ['id', 'attribute', 'attribute_name', 'value']


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'is_primary', 'image_features']


class ProductSerializer(serializers.ModelSerializer):
    attributes = ProductAttributeSerializer(many=True)
    category_name = serializers.CharField(source='category.name', read_only=True)
    store_name = serializers.CharField(source='store.name', read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'category', 'category_name',
                  'store', 'store_name', 'attributes', 'images']

    def create(self, validated_data):
        attributes_data = validated_data.pop('attributes')
        images_data = self.context.get('view').request.FILES

        product = Product.objects.create(**validated_data)

        for attr_data in attributes_data:
            ProductAttribute.objects.create(product=product, **attr_data)

        for image_data in images_data.getlist('images'):
            ProductImage.objects.create(product=product, image=image_data)

        return product

    def update(self, instance, validated_data):
        attributes_data = validated_data.pop('attributes', None)
        images_data = self.context.get('view').request.FILES

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        if attributes_data is not None:
            instance.attributes.all().delete()
            for attr_data in attributes_data:
                ProductAttribute.objects.create(product=instance, **attr_data)

        if images_data:
            instance.images.all().delete()
            for image_data in images_data.getlist('images'):
                ProductImage.objects.create(product=instance, image=image_data)

        return instance


class ProductDetailSerializer(ProductSerializer):
    category = CategorySerializer(read_only=True)
    store = StoreSerializer(read_only=True)

    class Meta(ProductSerializer.Meta):
        fields = ['id', 'name', 'description', 'price', 'category', 'store', 'attributes', 'images']


class ProductListSerializer(serializers.ModelSerializer):
    primary_image = serializers.SerializerMethodField()
    category_name = serializers.CharField(source='category.name', read_only=True)
    store_name = serializers.CharField(source='store.name', read_only=True)

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'category_name', 'store_name', 'primary_image']

    def get_primary_image(self, obj):
        primary_image = obj.images.filter(is_primary=True).first()
        if primary_image:
            return self.context['request'].build_absolute_uri(primary_image.image.url)
        return None


class CategoryProductSerializer(serializers.ModelSerializer):
    products = ProductListSerializer(many=True, read_only=True)
    subcategories = serializers.SerializerMethodField()
    parent = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name', 'parent', 'subcategories', 'products']

    def get_subcategories(self, obj):
        return CategoryProductSerializer(obj.subcategories.all(), many=True).data

    def get_parent(self, obj):
        if obj.parent:
            return {'id': obj.parent.id, 'name': obj.parent.name}
        return None
