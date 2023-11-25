from django.contrib import admin
from django.urls import path , include
from .views import get_user_data , register_user

urlpatterns = [
    path('api/<int:user_id>/' , get_user_data , name="show-user"),
    path('api/registry/' , register_user , name="user-registry"),
]
