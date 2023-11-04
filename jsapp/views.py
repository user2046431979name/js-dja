from django.shortcuts import render
from .models import *
from django.http import JsonResponse
from django.core import serializers
# Create your views here.
def index(request):
    return render(request,'index.html')


def getStudents(request):
    row = Students.objects.all()
    rows = []
    
    for i in row:
        rows.append(

            {
                'id':i.id,
                'name':i.name,
                'image':i.image.url
            }
        )
    #rows = serializers.serialize('json',row)
    return JsonResponse({"values":rows},safe=False)










