from django.db import models
import psutil

# Create your models here.
class SystemUsage:
    def getCPUPercent():
        return psutil.cpu_percent()


    def getMemoryPercent():
       return psutil.virtual_memory().percent

