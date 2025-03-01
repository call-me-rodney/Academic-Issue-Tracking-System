from django.db import models

# Create your models here.
class roles(models.Model):
    ROLES = {
        "S": "Student",
        "L": "Lecturer",
        "A": "Administrator"
    }

    role = models.CharField(max_length=1,choices=ROLES)
    roleID = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.role
    
class users(models.Model):
    userID = models.IntegerField(primary_key=True)
    roleID = models.ForeignKey(roles, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class issues(models.Model):
    STATUS = {
        'OPEN':'OPEN',
        'In Progress':'In Progress',
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
    category = models.CharField(max_length=2,choices=CATEGORY)
    description = models.CharField(max_length=255)
    status = models.CharField(max_length=20, choices=STATUS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    assigned_to = models.CharField(max_length=100)

    def __str__(self):
        return self.issue
    
class notifications(models.Model):
    notificationID = models.IntegerField(primary_key=True)
    userID = models.ForeignKey(users, on_delete=models.CASCADE)
    issueID = models.ForeignKey(issues, on_delete=models.CASCADE)
    message = models.CharField(max_length=255)

    def __str__(self):
        return self.message