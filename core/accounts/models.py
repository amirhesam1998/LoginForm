from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)
from django.utils.translation import (
    gettext_lazy as _,
)
from django.core.validators import EmailValidator
from django.contrib.auth.models import PermissionsMixin

from django.contrib.auth.models import AbstractUser


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

class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError(_("the email must be set"))
        email_validator = EmailValidator()
        email_validator(email)
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
    
    def create_superuser(self, email, password, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_verified", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email, password, **extra_fields)
    
    
'''
class User(AbstractBaseUser , PermissionsMixin):
    year = models.IntegerField(_("year") ,blank=True , null = True )
    month =models.IntegerField(_("month") ,blank=True , null = True )
    day =models.IntegerField(_("day"),blank=True , null = True )
    phone_number = models.CharField(_("phone_number"),max_length=11,blank=True , null = True)
    first_name = models.CharField(max_length=50 ,blank=True , null = True)
    last_name = models.CharField(max_length=50,blank=True , null = True)
    email = models.EmailField(unique=True , blank=True , null = True)
    username = models.CharField(max_length=50,blank=True , null = True)
    is_staff = models.BooleanField(default=False,blank=True , null = True)
    is_active = models.BooleanField(default=True,blank=True , null = True)
    is_verified = models.BooleanField(default=False,blank=True , null = True)
    is_superuser = models.BooleanField(default=False,blank=True , null = True)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []
    objects = UserManager()
'''

class User(AbstractUser):
    year = models.IntegerField(_("year") ,blank=True , null = True )
    month =models.IntegerField(_("month") ,blank=True , null = True )
    day =models.IntegerField(_("day"),blank=True , null = True )
    phone_number = models.CharField(_("phone_number"),max_length=11,blank=True , null = True)
    updated_date = models.DateTimeField(auto_now=True)
    rePassword = models.CharField(_("password"), max_length=128 ,blank=True , null = True)