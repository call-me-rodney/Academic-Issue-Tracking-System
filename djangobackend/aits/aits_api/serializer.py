from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
from .models import *

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ["userID","roleID","name","email","password"]
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True},
            'unique_number': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs.pop('password2'):
            raise serializers.ValidationError({"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            unique_number=validated_data['unique_number'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            role=validated_data['role']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
        
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