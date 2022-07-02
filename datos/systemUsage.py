import psutil

def getCPUPercent():
    return psutil.cpu_percent

def getMemoryPercent():
    return psutil.virtual_memory().percent