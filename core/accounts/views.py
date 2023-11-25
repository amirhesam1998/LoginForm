from django.shortcuts import render

from rest_framework import generics
from .models import User
from .serializers import UserSerializer
class RegistrationApiView(generics.GenericAPIView):

    serializer_class = UserSerializer
    def post(self, request, *args, **kwargs):
        serializer = RegistrationSerializer(data=request.data)