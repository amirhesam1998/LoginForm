from django.contrib import admin
from django.urls import path , include
from .views import  ArticleCreateView

urlpatterns = [
    # path('api/<int:user_id>/' , get_user_data , name="show-user"),
    path('api/registry/' , ArticleCreateView.as_view() , name="user-registry"),
]
