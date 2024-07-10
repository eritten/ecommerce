# admin.py

from django.contrib import admin
from django.utils.html import format_html
from django.db.models import Avg
from .models import Category, Attribute, Store, Product, ProductAttribute, Review, ProductImage


class SubCategoryInline(admin.TabularInline):
    model = Category
    extra = 1
    verbose_name = "Subcategory"
    verbose_name_plural = "Subcategories"


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'parent', 'get_products_count')
    search_fields = ('name',)
    list_filter = ('parent',)
    inlines = [SubCategoryInline]

    def get_products_count(self, obj):
        return obj.products.count()

    get_products_count.short_description = 'Products Count'


@admin.register(Attribute)
class AttributeAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'get_usage_count')
    search_fields = ('name', 'category__name')
    list_filter = ('category',)

    def get_usage_count(self, obj):
        return ProductAttribute.objects.filter(attribute=obj).count()

    get_usage_count.short_description = 'Usage Count'


class ProductAttributeInline(admin.TabularInline):
    model = ProductAttribute
    extra = 1
    autocomplete_fields = ['attribute']


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ('image', 'is_primary', 'thumbnail')
    readonly_fields = ('thumbnail',)

    def thumbnail(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="width: 45px; height: 45px;" />'.format(obj.image.url))
        return ""

    thumbnail.short_description = 'Thumbnail'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'store', 'get_primary_image')
    list_editable = ('price',)
    search_fields = ('name', 'description', 'store__name', 'category__name')
    list_filter = ('category', 'store')
    inlines = [ProductAttributeInline, ProductImageInline]
    autocomplete_fields = ['category', 'store']
    fieldsets = (
        (None, {
            'fields': ('name', 'description', 'price', 'category', 'store')
        }),
    )

    def get_primary_image(self, obj):
        primary_image = obj.images.filter(is_primary=True).first()
        if primary_image:
            return format_html('<img src="{}" style="width: 45px; height: 45px;" />'.format(primary_image.image.url))
        return ""

    get_primary_image.short_description = 'Primary Image'


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner', 'rating', 'get_products_count', 'get_average_rating')
    search_fields = ('name', 'description', 'owner__username')
    list_filter = ('rating',)
    readonly_fields = ('rating',)

    def get_products_count(self, obj):
        return obj.products.count()

    get_products_count.short_description = 'Products Count'

    def get_average_rating(self, obj):
        avg_rating = obj.reviews.aggregate(Avg('rating'))['rating__avg']
        return round(avg_rating, 2) if avg_rating else "No ratings"

    get_average_rating.short_description = 'Average Rating'


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('store', 'user', 'rating', 'created_at', 'short_comment')
    search_fields = ('comment', 'store__name', 'user__username')
    list_filter = ('rating', 'created_at')
    readonly_fields = ('created_at',)

    def short_comment(self, obj):
        return obj.comment[:50] + '...' if len(obj.comment) > 50 else obj.comment

    short_comment.short_description = 'Comment'


admin.site.site_header = "Falaahh Admin"
admin.site.site_title = "Falaahh Admin Portal"
admin.site.index_title = "Welcome to Falaahh  Admin Portal"
