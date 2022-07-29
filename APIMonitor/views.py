import json
from urllib import response
from django.views import View
from django.http import JsonResponse
from APIMonitor.models import SystemUsage, MacTable
# from .modules import level_up_connection

# Create your views here.
class MacListView(View):
    def get(self, request):
        response = JsonResponse(MacTable.getMacTable(), safe=False)
        response["Access-Control-Allow-Origin"] = "*"
        return response

class CPUView(View):
    def get(self, request, pk):
        response = JsonResponse(SystemUsage.getCPUPercent(pk), safe=False)
        response["Access-Control-Allow-Origin"] = "*"
        return response

class MemoryView(View):
    def get(self, request, pk):
        response = JsonResponse(SystemUsage.getMemoryPercent(pk), safe=False)
        response["Access-Control-Allow-Origin"] = "*"
        return response