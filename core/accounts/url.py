from django.contrib import admin
from django.urls import path , include
from .views import get_user_data , UserCreateView

urlpatterns = [
    path('api/<int:user_id>/' , get_user_data , name="show-user"),
    path('api/registry/' , UserCreateView.as_view() , name="user-registry"),
]
