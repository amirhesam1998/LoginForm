from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from ...models import CustomUser
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _



class RegistrationSerializer(serializers.ModelSerializer):
    rePassword = serializers.CharField(max_length=255)

    class Meta:
        model = CustomUser
        fields = ['first_name','last_name','username','year','month','day','phone_number',"email", "password", "rePassword"]

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
        
        return CustomUser.objects.create_user(**validated_data)
    
    
  
    
    
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
        else:
            msg = _('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code="authorization")

        attrs["user"] = user
        return attrs