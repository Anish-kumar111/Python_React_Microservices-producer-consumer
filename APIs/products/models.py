from django.db import models
# from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
     title = models.CharField(max_length=121)
     image = models.CharField(max_length=121)
     likes  = models.PositiveIntegerField(default=0)
    #  date = models.DateField(null=True)
 
     def __str__(self):
      return self.title

class User(models.Model):
    
    pass