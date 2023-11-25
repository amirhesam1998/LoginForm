# from django.shortcuts import render

# from rest_framework import generics
# from .models import User
# from .serializers import UserSerializer
# class RegistrationApiView(generics.GenericAPIView):

#     serializer_class = UserSerializer
#     def post(self, request, *args, **kwargs):
#         serializer = RegistrationSerializer(data=request.data)

from django.http import HttpResponse
from .serializers import serialize_user , register_user
from .models import User
import json
from django.views.decorators.csrf import csrf_exempt

def get_user_data(request, user_id):
    user = User.objects.get(pk=user_id)
    serialized_user = serialize_user(user)
    return HttpResponse(serialized_user, content_type='application/json')

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serialized_data = register_user(data)
        return HttpResponse(serialized_data, content_type='application/json')
    else:
        return HttpResponse(json.dumps({'success': False, 'message': 'متد درخواست نامعتبر است'}), content_type='application/json')
   
