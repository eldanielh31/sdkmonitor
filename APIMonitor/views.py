import json
from urllib import response
from django.views import View
from django.http import JsonResponse
from APIMonitor.models import SystemUsage, MacTable


# Create your views here.
class MacListView(View):
    def get(self, request):
        response = JsonResponse(MacTable.getMacTable(), safe=False)
        response["Access-Control-Allow-Origin"] = "*"
        return response

class CPUView(View):
    def get(self, request):
        response = JsonResponse({"cpu": SystemUsage.getCPUPercent()})
        response["Access-Control-Allow-Origin"] = "*"
        return response

class MemoryView(View):
    def get(self, request):
        response = JsonResponse( {"memory" : SystemUsage.getMemoryPercent()} )
        response["Access-Control-Allow-Origin"] = "*"
        return response

class IPView(View):
    def get(self, request, pk):
        response = JsonResponse( {
            "id" : pk,
            "isCorrect" : True
        })
        response["Access-Control-Allow-Origin"] = "*"
        return response

class UserView(View):
    def post(self, request):
        data = json.loads(request.body)
        return JsonResponse(data)