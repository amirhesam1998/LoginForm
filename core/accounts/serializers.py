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

def serialize_user(user_instance):
    serialized_data = serialize('json', [user_instance])
    return serialized_data