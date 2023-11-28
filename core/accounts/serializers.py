# from django.core.serializers import serialize
# from django.forms.models import model_to_dict

# def serialize_user(user_instance):
#     serialized_data = serialize('json', [user_instance])
#     return serialized_data


# class UserProfileSerializer:
#     @staticmethod
#     def serialize(user_profile):
#         return model_to_dict(user_profile)

from rest_framework import serializers
from django.forms.models import model_to_dict


class UserSerializer(serializers.ModelSerializer):
    @staticmethod
    def serialize(user_profile):
        return model_to_dict(user_profile)