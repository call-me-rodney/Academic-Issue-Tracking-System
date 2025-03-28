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
    
    @action(detail=False, methods=['post'], permission_classes=[permissions.AllowAny])
    def register(self, request):
        serializer = userCreateSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': userSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['post'], permission_classes=[permissions.AllowAny])
    def login(self, request):
        serializer = loginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(email=email, password=password)
            
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'user': userSerializer(user).data
                })
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    @action(detail=False, methods=['get'], permission_classes=[permissions.IsAuthenticated])
    def me(self, request):
        serializer = userSerializer(request.user)
        return Response(serializer.data)
    
class IssueViewSet(viewsets.ModelViewSet):
    queryset = issues.objects.all()
    serializer_class = issueSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [permissions.IsAuthenticated()]
        if self.action == 'create':
            return [permissions.IsAuthenticated(), IsStudent()]
        return [permissions.IsAuthenticated(), IsAdmin() | IsRegistrar() | IsLecturer()]