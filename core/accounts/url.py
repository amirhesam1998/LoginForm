from django.contrib import admin
from django.urls import path 
from .views import  RegistrationApiView , UserListApiView  , UserLogoutToken , UserLoginToken
# from rest_framework_simplejwt.views import (
#     TokenRefreshView,
#     TokenVerifyView,
# )
urlpatterns = [
    path('api/registry/' , RegistrationApiView.as_view() , name="user-registry"),
    path('api/users/' , UserListApiView.as_view({'get' : 'list'}) ,name="user-lists"),
    path('api/login/' , UserLoginToken.as_view() , name='login-users'),
    path('api/logout/' , UserLogoutToken.as_view() , name='logout-user'),
    # path('api/jwt/create', CustomTokenObtainPairView.as_view() , name='jwt-create'),
    # path('api/jwt/refresh' , TokenRefreshView.as_view() , name='jwt-refresh'),
    # path('api/jwt/verify' , TokenVerifyView.as_view() , name='jwt-verify'),
]
