from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = ["userID","roleID","name","email","password"]

class roleSerializer(serializers.ModelSerializer):
    class Meta:
        model = roles
        fields = ["role","roleID","descrition"]

class issueSerializer(serializers.ModelSerializer):
    class Meta:
        model = issues
        fields = ["issueID","userID","issue","category","description","status","created_at","updated_at","assigned_to"]

class notificationSerializer(serializers.ModelSerializer):
    class Meta:
        model  = notifications
        fields = ["notificationID","userID","issueID","message"]

class deptSerializer(serializers.ModelSerializer):
    class Meta:
        model = departments
        fields = ["deptID","deptName","college","description"]