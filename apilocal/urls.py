from django.urls import path

from apilocal.views import IPView, LoginView

urlpatterns = [
    path('ip/<str:pk>/', IPView.as_view(), name='ip'),
    path('login/', LoginView.as_view(), name='login')
]