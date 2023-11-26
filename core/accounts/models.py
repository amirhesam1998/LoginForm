from django.db import models

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
