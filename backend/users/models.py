from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser


class user(AbstractUser):
    emails = models.EmailField(unique=True)