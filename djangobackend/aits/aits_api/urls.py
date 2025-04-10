from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import *

urlpatterns = [
    # Authentication endpoints
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # User endpoints
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetailView.as_view(), name='user-detail'),

    # Issue endpoints
    path('issues/', IssueListView.as_view(), name='issue-list'),
    path('issues/<int:pk>/', IssueDetailView.as_view(), name='issue-detail'),

    # Department endpoints
    path('departments/', DepartmentListView.as_view(), name='department-list'),

    # # Notification endpoints
    # path('notifications/', NotificationListView.as_view(), name='notification-list'),
    # path('notifications/<int:pk>/', NotificationDetailView.as_view(), name='notification-detail'),
]