from django.urls import path 
from . import views
urlpatterns = [
    path('registry/', views.UserRegistryApiView.as_view(), name='user_registry'),
    path('token/login/' , views.CustomObtainAuthToken.as_view() , name="user_login"),
    path('token/logout/',views.CustomDiscardAuthToken.as_view(), name="token-logout"),
]
