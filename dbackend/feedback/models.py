from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    telephone_number = models.CharField(max_length=20)
    content = models.TextField()
    def __str__(self):
        return self.name