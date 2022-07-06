import json
from django.views import View
from django.http import JsonResponse
from APIMonitor.models import SystemUsage


# Create your views here.
class MacListView(View):
    def get(self, request):
        if request.method == "GET":
            return JsonResponse(data = [{"hola": "mundo"}], safe = False)
        else:
            return JsonResponse(data={})

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