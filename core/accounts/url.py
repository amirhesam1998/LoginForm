from django.contrib import admin
from django.urls import path , include
from .views import get_user_data

urlpatterns = [
    path('api/<int:user_id>/' , get_user_data , name="api")
]
