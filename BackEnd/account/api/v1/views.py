from .serializers import RegistrationSerializer , CustomAuthTokenSerializer
from django.shortcuts import get_object_or_404
from ...models import CustomUser
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class UserRegistryApiView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            username = serializer._validated_data["username"]
            data = {"username": username}
            user_obj = get_object_or_404(CustomUser, username=username)
            return Response(data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CustomObtainAuthToken(ObtainAuthToken):
    serializer_class = CustomAuthTokenSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        print(user)
        token, created = Token.objects.get_or_create(user=user)
        print(token.key)
        return Response({"token": token.key, "user_id": user.pk, "username": user.username})



class CustomDiscardAuthToken(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)