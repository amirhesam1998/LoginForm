from django.contrib import admin
from django.urls import path 
from .views import  RegistrationApiView , UserListApiView , UserLoginAPIView

urlpatterns = [
    # path('api/<int:pk>/' , UserDataView.as_view() , name="show-user"),
    path('api/registry/' , RegistrationApiView.as_view() , name="user-registry"),
    path('api/users/' , UserListApiView.as_view({'get' : 'list'}) ,name="user-lists"),
    path('api/login/' , UserLoginAPIView.as_view() , name='login-users')
]
