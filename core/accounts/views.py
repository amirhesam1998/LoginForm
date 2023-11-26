# from django.http import HttpResponse , JsonResponse
# from .serializers import serialize_user , UserProfileSerializer
# from .models import User
# from django.views.decorators.csrf import csrf_exempt
# from django.views import View
# from django.utils.decorators import method_decorator
# from .forms import UserInformation
# from django.views.generic import CreateView

# def get_user_data(request, user_id):
#     user = User.objects.get(pk=user_id)
#     serialized_user = serialize_user(user)
#     return HttpResponse(serialized_user, content_type='application/json')


# @method_decorator(csrf_exempt, name='dispatch')
# class UserCreateView(View):
#     def post(self, request):
#         data = request.POST
#         print(data)
#         user_profile = User.objects.create(
#             first_name=data.get('first_name'),
#             last_name=data.get('last_name'),
#             birthday=data.get('birthday'),
#             phone_number=data.get('phone_number'),
#             email=data.get('email'),
#             username=data.get('username'),
#             password=data.get('password'),
#         )

#         serialized_user_profile = UserProfileSerializer.serialize(user_profile)
#         return JsonResponse(serialized_user_profile)

# @method_decorator(csrf_exempt, name='dispatch')
# class UserCreateView(CreateView):
#     model = User
#     form_class = UserInformation


# @method_decorator(csrf_exempt, name='dispatch')
# class UserCreateView(View):
#     def post(self, request):
#         data = request.POST
#         print(data)
#         form = PersonalInformation(data)
#         if form.is_valid():
#             user = User()
#             user.first_name = form.cleaned_data.get("first_name")
#             user.last_name = form.cleaned_data.get("last_name")
#             user.birthday = form.cleaned_data.get("birthday")
#             user.phone_number = form.cleaned_data.get("phone_number")
#             user.email = form.cleaned_data.get("email")
#             user.username = form.cleaned_data.get("username")
#             user.password = form.cleaned_data.get("password")
#             user.save()
#             serialized_user_profile = UserProfileSerializer.serialize(user)
#             return JsonResponse(serialized_user_profile)

from rest_framework.generics import CreateAPIView
from .models import User
from .serializers import UserSerializer



class ArticleCreateView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


