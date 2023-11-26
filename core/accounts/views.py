from django.http import HttpResponse , JsonResponse
from .serializers import serialize_user , UserProfileSerializer
from .models import User
from django.views.decorators.csrf import csrf_exempt
from django.views import View
from django.utils.decorators import method_decorator


def get_user_data(request, user_id):
    user = User.objects.get(pk=user_id)
    serialized_user = serialize_user(user)
    return HttpResponse(serialized_user, content_type='application/json')


@method_decorator(csrf_exempt, name='dispatch')
class UserCreateView(View):
    def post(self, request):
        data = request.POST
        user_profile = User.objects.create(
            first_name=data.get('first_name'),
            last_name=data.get('last_name'),
            birthday=data.get('birthday'),
            phone_number=data.get('phone_number'),
            email=data.get('email'),
            username=data.get('username'),
            password=data.get('password'),
            re_password=data.get('re_password')
        )

        serialized_user_profile = UserProfileSerializer.serialize(user_profile)
        return JsonResponse(serialized_user_profile)