from django.db import models

class Custommer(models.Model):
    name=models.CharField(max_length=200)
    industry=models.CharField(max_length=100)
    
    
class UserModel(models.Model):
    
    name=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    birthday=models.DateField(max_length=20)
    useraddress=models.CharField(max_length=200)
    phonenumber= models.CharField(max_length=10)    
