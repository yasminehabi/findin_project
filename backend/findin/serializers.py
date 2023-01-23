from rest_framework import serializers
from findin.models import Custommer,UserModel

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Custommer
        fields = '__all__' 
        
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserModel
        fields = '__all__'