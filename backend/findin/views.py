from findin.models import Custommer
from findin.serializers import CustomerSerializer
from django.http import JsonResponse

def customers(request):
    #invoke serializer and return to client
    data=Custommer.objects.all()
    serializer=CustomerSerializer(data, many=True)
    return JsonResponse({'customers': serializer.data})