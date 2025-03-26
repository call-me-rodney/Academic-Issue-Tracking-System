from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models_old import *
from .serializer_old import *

# Create your views here.
class Home(APIView):
    def get(self, request):
        output = [{"category":output.category,"description":output.description,"status":output.status,"created_at":output.created_at,"updated_at":output.updated_at,"assigned_to":output.assigned_to} for output in issues.objects.all()]
        return Response(output)
    
    def post(self,request):
        serializer = issueSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
class login(APIView):
    def post(self,request):
        serializer = userSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)