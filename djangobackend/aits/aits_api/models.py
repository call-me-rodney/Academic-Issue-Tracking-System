from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from django.utils.translation import gettext_lazy as _


# Custom User Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')
        
        return self.create_user(email, password, **extra_fields)

# Custom User Model
class User(AbstractUser, PermissionsMixin):
    ROLE_CHOICES = [
        ('S', 'Student'),
        ('L', 'Lecturer'),
        ('A', 'Admin'),
        ('R', 'Registrar'),
    ]
    
    username = None
    email = models.EmailField(_('email address'), unique=True)
    unique_number = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    role = models.CharField(max_length=1, choices=ROLE_CHOICES, default='S')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'unique_number']
 
# Create your models here.
class roles(models.Model):
    ROLES = {
        "S": "Student",
        "L": "Lecturer",
        "A": "Admin",
        "R": "Registrar",
    }

    role = models.CharField(max_length=1,choices=ROLES)
    roleID = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.role

class departments(models.Model):
    COLLEGE = {
        'COCIS':'College of Computing and Information Sciences',
        'CEDAT':'College of Engineering, Design, Art and Technology',
    }
    deptID = models.IntegerField(primary_key=True)
    deptName = models.CharField(max_length=100)
    college = models.CharField(max_length=10,choices=COLLEGE)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.deptName 
    
class users(models.Model):
    userID = models.IntegerField(primary_key=True)
    roleID = models.ForeignKey(roles, on_delete=models.CASCADE)
    surname = models.CharField(max_length=100)
    firstName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class issues(models.Model):
    STATUS = {
        'CREATED':'CREATED',
        'PENDING':'PENDING',
        'OPEN':'OPEN',
        'RESOLVED':'RESOLVED',
        'CLOSED':'CLOSED',
    }
    CATEGORY = {
        'MM': 'Missing Marks',
        'MC': 'Missing Coursework',
        'WM': 'Wrong Marks',
        'MP': 'Paper Missed',
    }

    issueID = models.IntegerField(primary_key=True)
    userID = models.ForeignKey(users, on_delete=models.CASCADE)
    deptID = models.ForeignKey(departments, on_delete=models.CASCADE)
    category = models.CharField(max_length=2,choices=CATEGORY)
    description = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    assigned_to = models.CharField(max_length=100)

    def __str__(self):
        return self.issue
    
class notifications(models.Model):
    STATE = {
        'READ':'READ',
        'UNREAD':'UNREAD',
    }
    notID = models.IntegerField(primary_key=True)
    userID = models.ForeignKey(users, on_delete=models.CASCADE)
    issueID = models.ForeignKey(issues, on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    state = models.CharField(max_length=10,choices=STATE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message