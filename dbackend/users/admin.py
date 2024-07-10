# users/admin.py

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from ads.models import *


class StoreInline(admin.TabularInline):
    model = Store
    extra = 0


class ReviewInline(admin.TabularInline):
    model = Review
    extra = 0


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'fullname', 'is_staff', 'is_active')
    search_fields = ('email', 'fullname')
    ordering = ('email',)
    inlines = [StoreInline, ReviewInline]

    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('fullname',)}),
        ('Permissions', {'fields': ('is_active', 'is_staff',
         'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'fullname', 'password1', 'password2'),
        }),
    )


admin.site.site_title = "falaahh admin portal"
admin.site.site_header = "falaahh admin portal"
admin.site.site_index = "Welcome to falaahh admin"
