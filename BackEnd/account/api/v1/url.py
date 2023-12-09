from django.urls import path 
from . import views

urlpatterns = [
    path('registry/', views.UserRegistryApiView.as_view(), name='user_registry'),
]
