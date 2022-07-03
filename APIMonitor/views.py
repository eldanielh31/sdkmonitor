from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from APIMonitor.models import SystemUsage


# Create your views here.
class MacListView(View):
    def get(self, request):
        return JsonResponse(data = [{"hola": "mundo"}], safe = False)

class CPUView(View):
    def get(self, request):
        return JsonResponse({"cpu": SystemUsage.getCPUPercent()})

class MemoryView(View):
    def get(self, request):
        return JsonResponse( {"memory" : SystemUsage.getMemoryPercent()} )

