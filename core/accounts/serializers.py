# from rest_framework import serializers
# from .models import User
# from django.contrib.auth.password_validation import validate_password
# from django.core import exceptions
# from django.core.serializers import serialize  
# class RegistrationSerializer(serializers.ModelSerializer):
    # password1 = serializers.CharField(max_length=255)
    
    # class Meta:
    #     model = User
    #     fields = ["email", "password", "password1"]
    # def validate(self, attrs):
    #     if attrs.get("password") != attrs.get("password1"):
    #         raise serializers.ValidationError({"detail": "passwords does not match"})

    #     try:
    #         validate_password(attrs.get("password"))
    #     except exceptions.ValidationError as e:
    #         raise serializers.ValidationError({"password": list(e.messages)})

    #     return super().validate(attrs)
    # def create(self, validated_data):
    #     validated_data.pop("password1", None)
    #     return User.objects.create_user(**validated_data)

from django.core.serializers import serialize
from .models import User
import json
from django.http import JsonResponse
def serialize_user(user_instance):
    serialized_data = serialize('json', [user_instance])
    return serialized_data

def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)     #json to python
            new_user = User.objects.create(
                first_name=data['first_name'],
                last_name=data['last_name'],
                birthday=data['birthday'],
                phone_number=data['phone_number'],
                email=data['email'],
                username=data['username'],
                password=data['password']
            )
            new_user.save()
            serialized_data = json.dumps({'success': True, 'message': 'کاربر با موفقیت ثبت شد'})  #python to json
            return JsonResponse(serialized_data, status=201, safe=False)
        except Exception as e:
            error_message = json.dumps({'success': False, 'message': str(e)})
            return JsonResponse(error_message, status=400, safe=False)
    else:
        return JsonResponse(json.dumps({'success': False, 'message': 'متد درخواست نامعتبر است'}), status=405, safe=False)

