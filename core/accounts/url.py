from django.contrib import admin
from django.urls import path , include
from .views import RegistrationApiView

urlpatterns = [
    path('api/registration/' , RegistrationApiView.as_view() , name="login-form")
]
