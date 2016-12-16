from __future__ import unicode_literals

from django.db import models
from django.core.validators import MaxValueValidator

# Create your models here.



class TabataSession(models.Model):
	numberOfSessions =  models.PositiveIntegerField(default= 1, validators=[MaxValueValidator(20),])
	length_of_work = models.PositiveIntegerField(default= 25, validators=[MaxValueValidator(30),])
	length_of_rest = models.PositiveIntegerField(default= 5, validators=[MaxValueValidator(15),])
	work_music = models.CharField(max_length=20)
	rest_music = models.CharField(max_length=20)
	

