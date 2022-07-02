from django.urls import path
from .views import MacListView

urlpatterns = [
    path('maclist/', MacListView.as_view(), name="mac_list")
]