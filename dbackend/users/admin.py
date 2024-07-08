from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.html import format_html
from django.utils.translation import gettext_lazy as _
from .models import User
from ads.models import Product, Review


# Register your models here.

class ProductInline(admin.TabularInline):
    model = Product
    extra = 1


class ReviewInline(admin.TabularInline):
    model = Review
    extra = 1


class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {
         'fields': ('fullname', 'telephone', 'profile_image_url', 'verificationCode')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff',
         'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'fullname', 'telephone',
                    'is_staff', 'profile_picture_tag', 'is_verified')
    list_filter = ('is_staff', 'is_superuser',
                   'is_active', 'groups', 'is_verified')
    search_fields = ('email', 'fullname', 'telephone')
    ordering = ('email',)
    filter_horizontal = ('groups', 'user_permissions',)
    inlines = [ProductInline, ReviewInline]

    def profile_picture_tag(self, obj):
        if obj.profile_image_url:
            return format_html('<img src="{}" style="width: 45px; height:45px;" />'.format(obj.profileImageUrl))
        return None
    profile_picture_tag.short_description = 'Profile Picture'


admin.site.register(User, UserAdmin)
