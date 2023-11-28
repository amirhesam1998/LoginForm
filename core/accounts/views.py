from .models import User
from .serializers import UserSerializer
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
import json

@method_decorator(csrf_exempt, name='dispatch')
class UserCreateView(View):
    def post(self, request):
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        user_profile = User.objects.create_user(
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            birthday=data.get('birthday'),
            phone_number=data.get('phone_number'),
            email=data.get('email'),
            username=data.get('username'),
            password=data.get('password'),
        )

        serialized_user_profile = UserSerializer.serialize(user_profile)
        return JsonResponse(serialized_user_profile)
        



