from django.db import models

# Create your models here.
class roles(models.Model):
    role = models.CharField(max_length=100)
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
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Resolved', 'Resolved')
    }

    issueID = models.IntegerField(primary_key=True)
    userID = models.ForeignKey(users, on_delete=models.CASCADE)
    issue = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    status = models.CharField(max_length=100, choices=STATUS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    assigned_to = models.CharField(max_length=100)

    def __str__(self):
        return self.issue
    
class notifications(models.Model):
    notificationID = models.IntegerField(primary_key=True)
    userID = models.ForeignKey(users, on_delete=models.CASCADE)
    issueID = models.ForeignKey(issues, on_delete=models.CASCADE)
    message = models.CharField(max_length=100)

    def __str__(self):
        return self.message