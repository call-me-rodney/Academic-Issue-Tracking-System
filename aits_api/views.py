from django.shortcuts import render
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model
from .models import *
from .serializer import *

User = get_user_model()

# Authentication Views
class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': UserSerializer(user).data
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        
        user = authenticate(email=email, password=password)
        
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': UserSerializer(user).data
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# User Management Views
class UserListView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        # Only admin and registrar can view all users
        if request.user.role in ['A', 'R']:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
    
class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
            # Only allow users to view their own profile or admins/registrars to view any profile
            if request.user.id == user.id or request.user.role in ['A', 'R']:
                serializer = UserSerializer(user)
                return Response(serializer.data)
            return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk):
        try:
            user = User.objects.get(pk=pk)
            # Only allow users to update their own profile or admins to update any profile
            if request.user.id == user.id or request.user.role == 'A':
                serializer = UserUpdateSerializer(user, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        
# Issue Views
class IssueListView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        # Filter issues based on user role
        if request.user.role == 'A':  # Admin sees all issues
            issues = Issue.objects.all()
        elif request.user.role == 'R':  # Registrar sees all issues
            issues = Issue.objects.all()
        elif request.user.role == 'L':  # Lecturer sees issues assigned to them
            issues = Issue.objects.filter(assigned_to=request.user)
        else:  # Students see only their own issues
            issues = Issue.objects.filter(user=request.user)
            
        serializer = IssueSerializer(issues, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        # Add the current user as the issue creator
        request.data['user'] = request.user.id
        serializer = IssueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            
            # # Create notification for registrar
            # registrars = User.objects.filter(role='R')
            # for registrar in registrars:
            #     Notification.objects.create(
            #         user=registrar,
            #         issue=issue,
            #         message=f"New issue created: {issue.get_category_display()} by {request.user.first_name} {request.user.last_name}"
            #     )
                
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class IssueDetailView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request, pk):
        try:
            issue = Issue.objects.get(pk=pk)
            # Check if user has permission to view this issue
            if (request.user.role in ['A', 'R'] or 
                request.user == issue.user or 
                request.user == issue.assigned_to):
                serializer = IssueSerializer(issue)
                return Response(serializer.data)
            return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
        except Issue.DoesNotExist:
            return Response({'error': 'Issue not found'}, status=status.HTTP_404_NOT_FOUND)
        
    def put(self, request, pk):
        try:
            issue = Issue.objects.get(pk=pk)
            # Check if user has permission to update this issue
            if request.user.role in ['A', 'R'] or request.user == issue.assigned_to:
                serializer = IssueSerializer(issue, data=request.data, partial=True)
                if serializer.is_valid():
                    updated_issue = serializer.save()
                    
                    # Create notification for the issue owner
                    # Notification.objects.create(
                    #     user=issue.user,
                    #     issue=issue,
                    #     message=f"Your issue has been updated. Status: {updated_issue.get_status_display()}"
                    # )
                    
                    return Response(serializer.data)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
        except Issue.DoesNotExist:
            return Response({'error': 'Issue not found'}, status=status.HTTP_404_NOT_FOUND)
    
# Department Views
class DepartmentListView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        departments = Department.objects.all()
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        # Only admin can create departments
        if request.user.role == 'A':
            serializer = DepartmentSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
    
# Notification Views
# class NotificationListView(APIView):
#     permission_classes = [IsAuthenticated]
    
#     def get(self, request):
#         # Users can only see their own notifications
#         notifications = Notification.objects.filter(user=request.user).order_by('-created_at')
#         serializer = NotificationSerializer(notifications, many=True)
#         return Response(serializer.data)

# class NotificationDetailView(APIView):
#     permission_classes = [IsAuthenticated]
    
#     def put(self, request, pk):
#         try:
#             notification = Notification.objects.get(pk=pk)
#             # Users can only update their own notifications
#             if request.user == notification.user:
#                 serializer = NotificationSerializer(notification, data=request.data, partial=True)
#                 if serializer.is_valid():
#                     serializer.save()
#                     return Response(serializer.data)
#                 return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#             return Response({'error': 'Not authorized'}, status=status.HTTP_403_FORBIDDEN)
#         except Notification.DoesNotExist:
#             return Response({'error': 'Notification not found'}, status=status.HTTP_404_NOT_FOUND)

# Home view for basic API information
class Home(APIView):
    permission_classes = [AllowAny]
    
    def get(self, request):
        return Response({
            "message": "Welcome to the Academic Issue Tracking System API",
            "endpoints": {
                "auth": {
                    "register": "/api/register/",
                    "login": "/api/login/"
                },
                "users": "/api/users/",
                "issues": "/api/issues/",
                "departments": "/api/departments/",
                "notifications": "/api/notifications/"
            }
        })


