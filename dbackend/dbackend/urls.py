from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView
from django.conf import settings
from django.conf.urls.static import static
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Falaahh API Documentation",
        default_version='v1',
        description="Falaahh is a multi-vendor e-commerce platform designed to connect buyers with sellers. This API documentation provides details on how to interact with various endpoints to manage products, categories, stores, and reviews.",
    #    terms_of_service="https://www.example.com/policies/terms/",
#        contact=openapi.Contact(email="contact@example.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),  # Djoser JWT URLs
    path('authenticate/', TokenObtainPairView.as_view(), name='token'),
    path('users/', include('users.urls')),
    path('api/v1/', include('ads.urls')),
    path('contact/', include('feedback.urls')),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
