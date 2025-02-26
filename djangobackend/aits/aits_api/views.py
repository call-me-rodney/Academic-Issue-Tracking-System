from django.shortcuts import render, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializer import *

# Create your views here.
class aitsHome(APIView):
    def get(self, request):
        output = '__all__'
        return Response(output)
    
    def post(self,request):
        serializer = issueSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        
class aitslogin(APIView):
    def post(self,request):
        serializer = userSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)