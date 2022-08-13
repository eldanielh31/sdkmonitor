from datetime import datetime
import psutil
import json

diccCPU = {}
diccMemory = {}

def getCPUPercent():
    return psutil.cpu_percent()

def getMemoryPercent():
    return psutil.virtual_memory().percent

def saveJson():
    try:
        with open('cpudata.json', 'w') as f:
            json.dump(diccCPU, f, indent=4)
            f.close()
        with open('memorydata.json', 'w') as f:
            json.dump(diccMemory, f, indent=4)
            f.close()
    except:
        print('Error al guardar')
    finally:
        print('Finalizó el guardado')

def getDate():
    return datetime.today().strftime("%Y-%m-%d")

def getTime(format):
    return datetime.now().strftime(format)

def saveInDictCPU():
    global diccCPU

    dateNow = getDate()
    timeNowWithSeconds = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    timeNowWithoutSeconds = getTime("%H:%M")

    if(dateNow in diccCPU):
        if (timeNowWithoutSeconds in diccCPU[dateNow]):
            tempObj = diccCPU[dateNow][timeNowWithoutSeconds]
            tempObj.append({'time':timeNowWithSeconds, 'value':getCPUPercent()})
        else:
            diccCPU[dateNow][timeNowWithoutSeconds] = [
                {'time': timeNowWithSeconds, 'value': getCPUPercent()}]
    else:
        diccCPU[dateNow] = {timeNowWithoutSeconds: [
            {'time': timeNowWithSeconds, 'value': getCPUPercent()}]}

def saveInDictMemory():
    global diccMemory

    dateNow = getDate()
    timeNowWithSeconds = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    timeNowWithoutSeconds = getTime("%H:%M")

    if(dateNow in diccMemory):
        if (timeNowWithoutSeconds in diccMemory[dateNow]):
            tempObj = diccMemory[dateNow][timeNowWithoutSeconds]
            tempObj.append({'time': timeNowWithSeconds,
                           'value': getMemoryPercent()})
        else:
            diccMemory[dateNow][timeNowWithoutSeconds] = [
                {'time': timeNowWithSeconds, 'value': getMemoryPercent()}]
    else:
        diccMemory[dateNow] = {timeNowWithoutSeconds: [
            {'time': timeNowWithSeconds, 'value': getMemoryPercent()}]}

def mainCpuMemory():
    saveInDictCPU()
    saveInDictMemory()
    saveJson()