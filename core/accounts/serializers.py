from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        

class RegistrationSerializer(serializers.ModelSerializer):
    rePassword = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = ["email" , "password" , "rePassword"]
        
    def validate(self, attrs):
        if attrs.get("password") != attrs.get("rePassword"):
            raise serializers.ValidationError({"detail": "passwords does not match"})

        try:
            validate_password(attrs.get("password"))
        except exceptions.ValidationError as e:
            raise serializers.ValidationError({"password": list(e.messages)})

        return super().validate(attrs)
    
    def create(self, validated_data):
        validated_data.pop("rePassword", None)
        return User.objects.create_user(**validated_data)