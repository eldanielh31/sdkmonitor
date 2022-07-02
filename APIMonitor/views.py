from django.shortcuts import render
from django.views import View
from django.http import JsonResponse

# Create your views here.
class MacListView(View):
    def get(self, request):
        return JsonResponse(data = [{"hola": "mundo"}], safe = False)