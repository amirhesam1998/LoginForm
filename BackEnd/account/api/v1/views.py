from .serializers import RegistrationSerializer
from django.shortcuts import get_object_or_404
from ...models import CustomUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics

class UserRegistryApiView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        print(data=request.data)
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            email = serializer._validated_data["email"]
            data = {"email": email}
            user_obj = get_object_or_404(CustomUser, email=email)
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserLoginApiView(generics.GenericAPIView):
    pass