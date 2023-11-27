from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
    UserManager as a
)
from django.utils.translation import (
    gettext_lazy as _,
)

'''
class User(models.Model):
    first_name = models.CharField(max_length=50 , blank=True , null=True)
    last_name = models.CharField(max_length=50, blank=True , null=True)
    birthday = models.DateField(blank=True , null=True)
    phone_number = models.CharField(max_length=15, blank=True , null=True)
    email = models.EmailField(unique=True, blank=True , null=True)
    username = models.CharField(max_length=50, blank=True , null=True)
    password = models.CharField(max_length=100, blank=True , null=True)

    def __str__(self):
        return self.username
'''
class UserManager(a):
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError(_("the email must be set"))
        email = self.normalize_email(
            email
        )  # check validation email by normalize_email method in BaseUserManager
        user = self.model(
            email=email, **extra_fields
        )  # create user model by valid email (check in line up) and extra fields
        user.set_password(
            password
        )  # ser password for user by set_password method in BaseUserManager
        user.save()
        return user



def validate_email(self , email):
    if not email:
        raise ValueError(_("the email must be set"))

    

class User(AbstractBaseUser):
    birthday = models.DateField(_("birthday"),)
    phone_number = models.CharField(_("phone_number"),max_length=11,)
    first_name = models.CharField(max_length=50 ,)
    last_name = models.CharField(max_length=50,)
    email = models.EmailField(unique=True ,validators=[validate_email])
    username = models.CharField(max_length=50,)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_verified = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    objects = UserManager()
    

