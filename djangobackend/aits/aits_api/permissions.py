from rest_framework import permissions

class IsAdmin(permissions.BasePermission):
    """
    Custom permission to only allow admins to access the view.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'A'

class IsRegistrar(permissions.BasePermission):
    """
    Custom permission to only allow registrars to access the view.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'R'
    
class IsLecturer(permissions.BasePermission):
    """
    Custom permission to only allow lecturers to access the view.
    """
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role == 'L'