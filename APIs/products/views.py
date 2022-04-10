
from random import random
from django.shortcuts import render

from products.models import Product, User
from products.serializers import ProductSerializer
from rest_framework import routers, serializers, viewsets , status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProductSerializer
import random
from .producer import publish
# Create your views here.
class ProductViewSet(viewsets.ViewSet):
    def list(self, request): #api list
        products =  Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        # publish()
        return Response(serializer.data)
        # pass



    def create(self, request): #api post
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        publish('product_created', serializer.data)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
        # pass



    def retrieve(self, request, pk=None): #api get
        product = Product.objects.get(id=pk)
        serializer= ProductSerializer(product)
        return Response(serializer.data)



        # pass



    def update(self, request, pk=None): #api put
        product = Product.objects.get(id=pk)
        serializer= ProductSerializer(instance=product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        publish('product_updated', serializer.data)
        return Response(serializer.data,status=status.HTTP_202_ACCEPTED)
        

        # pass



    def destroy(self, request,pk=None): #api delete
        product = Product.objects.get(id=pk)
        product.delete()
        publish('product_deleted', pk)
        return Response(status=status.HTTP_204_NO_CONTENT)

        # pass

class UserAPIView(APIView):
     def get(self, _ ):
         users = User.objects.all()
         user = random.choice(users)
         return Response({'id':user.id
         
         })