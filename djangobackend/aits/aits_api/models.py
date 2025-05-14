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
    ROLES = {
        "Student":"Student",
        "Lecturer":"Lecturer",
        "Admin":"Admin",
    }
    
    username = None
    email = models.EmailField(_('email address'), unique=True)
    unique_number = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    role = models.CharField(max_length=1, choices=ROLES, default='S')
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'unique_number']
    
    objects = CustomUserManager()
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

# Departments Model
class Department(models.Model):
    COLLEGE = {
        'COCIS': 'COCIS',
        'CEDAT': 'CEDAT',
        'COBAMS': 'COBAMS',
        'CHUSS': 'CHUSS',
    }
    
    deptID = models.AutoField(primary_key=True)
    deptName = models.CharField(max_length=100)
    college = models.CharField(max_length=10, choices=COLLEGE)
    description = models.CharField(max_length=100)
    
    def __str__(self):
        return self.deptName

# Issues Model
class Issue(models.Model):
    STATUS = {
        'CREATED': 'CREATED',
        'PENDING': 'PENDING',
        'OPEN': 'OPEN',
        'RESOLVED': 'RESOLVED',
    }
    
    CATEGORY = {
        'MM': 'Missing Marks',
        'MC': 'Missing Coursework',
        'WM': 'Wrong Marks',
        'MP': 'Paper Missed',
    }
    
    issueID = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='issues')
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    category = models.CharField(max_length=2, choices=CATEGORY.items())
    description = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS.items(), default='CREATED')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_issues')
    
    def __str__(self):
        return f"Issue #{self.issueID}: {self.get_category_display()}"

#Notifications Model
# class Notification(models.Model):
#     STATE = {
#         'READ': 'READ',
#         'UNREAD': 'UNREAD',
#     }
    
#     notID = models.AutoField(primary_key=True)
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications')
#     issue = models.ForeignKey(Issue, on_delete=models.CASCADE, related_name='notifications')
#     message = models.CharField(max_length=255)
#     state = models.CharField(max_length=10, choices=STATE.items(), default='UNREAD')
#     created_at = models.DateTimeField(auto_now_add=True)
    
#     def __str__(self):
#         return self.message
