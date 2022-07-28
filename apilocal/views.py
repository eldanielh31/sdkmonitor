import json
from django.http import JsonResponse
from django.shortcuts import render
from django.views import View

from apilocal.models import Login

# Create your views here.

class IPView(View):
    def get(self, request, pk):
        return JsonResponse({
            "id": pk,
            "isCorrect": Login.myping(pk)
        })

class LoginView(View):
    def post(self, request):
        data = json.loads(request.body)
        return JsonResponse({'isCorrect': Login.login(
            data["ip"], data["username"], data["password"])})
