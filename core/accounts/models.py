from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthday = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=100)
    re_password =  models.CharField(max_length=100) 

    def __str__(self):
        return self.username
