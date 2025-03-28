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

