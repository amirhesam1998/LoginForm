from django.contrib import admin
from django.urls import path , include
from .views import  UserCreateView 

urlpatterns = [
    # path('api/<int:pk>/' , ArticleDetailView.as_view() , name="show-user"),
    path('api/registry/' , UserCreateView.as_view() , name="user-registry"),
]
