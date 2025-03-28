from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .models import users, roles, departments, issues, notifications
from .serializer import (
    userSerializer, userCreateSerializer, loginSerializer,
    roleSerializer, deptSerializer, issueSerializer, notificationSerializer
)
from .permissions import IsAdmin, IsRegistrar, IsLecturer, IsStudent

class RoleViewSet(viewsets.ModelViewSet):
    queryset = roles.objects.all()
    serializer_class = roleSerializer
    permission_classes = [IsAdmin]

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = departments.objects.all()
    serializer_class = deptSerializer
    permission_classes = [IsAdmin | IsRegistrar]

class UserViewSet(viewsets.ModelViewSet):
    queryset = users.objects.all()
    
    def get_serializer_class(self):
        if self.action == 'create':
            return userCreateSerializer
        return userSerializer
    
    def get_permissions(self):
        if self.action in ['register', 'login']:
            return [permissions.AllowAny()]
        if self.action == 'me':
            return [permissions.IsAuthenticated()]
        return [permissions.IsAuthenticated(), IsAdmin() | IsRegistrar()]