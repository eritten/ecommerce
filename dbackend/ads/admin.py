from django.contrib import admin
from .models import Product, Category, Attribute, ProductAttribute, Review, ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'created_at', 'updated_at')
    search_fields = ('name', 'description')
    list_filter = ('category', 'price')
    ordering = ('-created_at',)
    inlines = [ProductImageInline]


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name',)
    ordering = ('-created_at',)


class AttributeAdmin(admin.ModelAdmin):
    list_display = ('name', 'created_at', 'updated_at')
    search_fields = ('name',)
    ordering = ('-created_at',)


class ProductAttributeAdmin(admin.ModelAdmin):
    list_display = ('product', 'attribute', 'value',
                    'created_at', 'updated_at')
    search_fields = ('value',)
    list_filter = ('attribute', 'product')
    ordering = ('-created_at',)


class ReviewAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'rating',
                    'comment', 'created_at', 'updated_at')
    search_fields = ('comment', 'user__email', 'product__name')
    list_filter = ('rating', 'product', 'user')
    ordering = ('-created_at',)


admin.site.register(Product, ProductAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Attribute, AttributeAdmin)
admin.site.register(ProductAttribute, ProductAttributeAdmin)
admin.site.register(Review, ReviewAdmin)
