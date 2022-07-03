from django.urls import path
from .views import CPUView, MacListView, MemoryView

urlpatterns = [
    path('maclist/', MacListView.as_view(), name="mac_list"),
    path('cpu/', CPUView.as_view(), name="cpu"),
    path('memory/', MemoryView.as_view(), name="memory")
]