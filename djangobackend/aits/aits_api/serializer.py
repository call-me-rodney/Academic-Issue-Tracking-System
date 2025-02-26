from rest_framework import serializers
from .models import *

class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = users
        fields = '__all__'

class roleSerializer(serializers.ModelSerializer):
    class Meta:
        model = roles
        fields = '__all__'

class issueSerializer(serializers.ModelSerializer):
    class Meta:
        model = issues
        fields = '__all__'

class notificationSerializer(serializers.ModelSerializer):
    class Meta:
        model  = notifications
        fields = '__all__'