from django import forms

from .models import User

class UserInformation(forms.ModelForm):
    class Meta:
        model = User
        fields = ['first_name','last_name','birthday','phone_number','email','username','password']