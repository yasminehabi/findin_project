from rest_framework import serializers
from findin.models import Custommer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=Custommer
        fields = '__all__' 