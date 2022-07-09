from django.urls import path
from .views import CPUView, IPView, MacListView, MemoryView, UserView

urlpatterns = [
    path('mactable/', MacListView.as_view(), name="mac_list"),
    path('cpu/', CPUView.as_view(), name="cpu"),
    path('memory/', MemoryView.as_view(), name="memory"),
    path('ip/<int:pk>/', IPView.as_view(), name="ip"),
    path('user/', UserView.as_view(), name="user"),
] 