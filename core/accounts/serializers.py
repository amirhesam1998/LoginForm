from rest_framework import serializers
from .models import User
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from django.contrib.auth import authenticate
from django.utils.translation import (
    gettext_lazy as _)
# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"
        

class RegistrationSerializer(serializers.ModelSerializer):
    rePassword = serializers.CharField(max_length=255)
    class Meta:
        model = User
        fields = "__all__"
        
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
    
class CustomAuthTokenSerializer(serializers.Serializer):
    username = serializers.CharField(label=_("username"), write_only=True)
    password = serializers.CharField(
        label=_("password"),
        style={"input_type": "password"},
        trim_whitespace=False,
        write_only=True,
    )
    token = serializers.CharField(label=_("token"), read_only=True)

    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")

        if username and password:
            user = authenticate(
                request=self.context.get("request"),
                username=username,
                password=password,
            )

            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            if not user:
                msg = _("Unable to log in with provided credentials.")
                raise serializers.ValidationError(msg, code="authorization")
            if not user.is_verified:
                raise serializers.ValidationError({"detail": "user is not verified"})
        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code="authorization")

        attrs["user"] = user
        return attrs
    
# class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
#     def validate(self, attrs):
#         validated_data = super().validate(attrs)
#         if not self.user.is_verified:
#             raise serializers.ValidationError({"detail": "user is not verified"})
#         validated_data["username"] = self.user.username
#         validated_data["id"] = self.user.id
#         return validated_data