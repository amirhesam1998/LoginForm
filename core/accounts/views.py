from .serializers import UserSerializer , RegistrationSerializer
from rest_framework.response import Response
from rest_framework import generics
from django.shortcuts import get_object_or_404 
from rest_framework import status
from django.contrib.auth import get_user_model
from .models import User
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
# @method_decorator(csrf_exempt, name='dispatch')
# class UserCreateView(View):
#     def post(self, request):
#         data = json.loads(request.body.decode('utf-8'))
#         print(data)
#         user_profile = User.objects.create_user(
#             first_name=data.get('first_name'),
#             last_name=data.get('last_name'),
#             birthday=data.get('birthday'),
#             phone_number=data.get('phone_number'),
#             email=data.get('email'),
#             username=data.get('username'),
#             password=data.get('password'),
#         )

#         serialized_user_profile = UserSerializer.serialize(user_profile)
#         return JsonResponse(serialized_user_profile)
        



'''class UserListApiView(generics.RetrieveAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    def get_object(self):
        queryset = self.get_queryset()
        print(queryset)
        obj = get_object_or_404(queryset , User=self.request.user)
        return obj'''
    
class UserListApiView(viewsets.ViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    def list(self,request):
        serializer = self.serializer_class(self.queryset , many = True)
        print(serializer.data)
        return Response(serializer.data)

class RegistrationApiView(generics.GenericAPIView):
    serializer_class = RegistrationSerializer
    
    def post(self,request,*args,**kwargs):
        serializer = RegistrationSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data , status=status.HTTP_201_CREATED )
        print(serializer.errors)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

class UserLoginAPIView(APIView):
    def post(self, request, format=None):
        username = request.data.get('username')
        password = request.data.get('password')
        
        if username is None or password is None:
            return Response({'error': 'لطفا نام کاربری و رمز عبور را وارد کنید.'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.filter(username=username).first()
        
        if user is None or not user.check_password(password):
            return Response({'error': 'اطلاعات ورود نامعتبر است.'}, status=status.HTTP_401_UNAUTHORIZED)
        
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_200_OK)
