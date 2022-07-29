from django.urls import path
from .views import CPUView, IPView, MacListView, MemoryView, UserView

urlpatterns = [
    path('mactable/', MacListView.as_view(), name="mac_list"),
    path('cpu/<str:pk>/', CPUView.as_view(), name="cpu"),
    path('memory/<str:pk>/', MemoryView.as_view(), name="memory"),
] 