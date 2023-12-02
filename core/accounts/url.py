from django.contrib import admin
from django.urls import path 
from .views import  RegistrationApiView , UserListApiView  , UserLogoutToken , UserLoginToken

urlpatterns = [
    path('api/registry/' , RegistrationApiView.as_view() , name="user-registry"),
    path('api/users/' , UserListApiView.as_view({'get' : 'list'}) ,name="user-lists"),
    path('api/login/' , UserLoginToken.as_view() , name='login-users'),
    path('api/logout/' , UserLogoutToken.as_view() , name='logout-user')
]
