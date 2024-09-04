from .views import contact_view
from django.urls import path

urlpatterns = [
path('', contact_view, name='contact_view'),

]