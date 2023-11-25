from django.contrib import admin
from django.urls import path , include
from .views import UserCreate

urlpatterns = [
    path('api/login/' , UserCreate.as_view() , name="login-form")
]
