from findin.models import Custommer,UserModel
from findin.serializers import CustomerSerializer,UserSerializer
from django.http import JsonResponse, Http404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET','POST'])
def customers(request):
    #invoke serializer and return to client
    if request.method =='GET':
      data=Custommer.objects.all()
      serializer=CustomerSerializer(data, many=True)
      return Response({'customers': serializer.data})
    elif request.method =='POST':
        serializer=CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
@api_view(['GET','POST','DELETE'])
def customer(request,id):
    try:
        data=Custommer.objects.get(pk=id)
    except Custommer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=CustomerSerializer(data)
       return Response({'customer': serializer.data})
    elif (request.method =='DELETE') :
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method =='POST':
        serializer=CustomerSerializer(data,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'customer':serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
            
@api_view(['GET','POST'])     
def users(request):
    #invoke serializer and return to client
    if request.method =='GET':
      data=UserModel.objects.all()
      serializer=UserSerializer(data, many=True)
      return Response({'users': serializer.data})
    elif request.method =='POST':
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'users':serializer.data}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET','POST','DELETE'])
def user(request,id):
    try:
        data=UserModel.objects.get(pk=id)
    except UserModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
       serializer=UserSerializer(data)
       return Response({'users': serializer.data})
    elif (request.method =='DELETE') :
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method =='POST':
        serializer=UserSerializer(data,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'users':serializer.data})
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)