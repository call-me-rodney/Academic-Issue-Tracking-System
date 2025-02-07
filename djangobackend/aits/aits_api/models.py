from django.db import models

# Create your models here.
class students(models.Model):
    username = models.CharField(max_length=100)
    stud_no = models.IntegerField()
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.username
    
class lecturer(models.Model):
    username = models.CharField(max_length=100)
    lect_no = models.IntegerField()
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.username
    
class admins(models.Model):
    username = models.CharField(max_length=100)
    admin_no = models.IntegerField()
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.username