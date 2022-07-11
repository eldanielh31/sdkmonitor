from cProfile import run
import psutil
import json
from threading import Thread
from datetime import date, datetime, timedelta
from time import sleep

dicCPU={}
diccMemory={}

class SystemUsage:
    def getCPUPercent():
        return psutil.cpu_percent()

    def getMemoryPercent():
        return psutil.virtual_memory().percent

def agregarDiccionario(date, time, usage, dictionary):
    if(date in dictionary):
        tempObj = dictionary[date]
        tempObj[time] = usage
        dictionary[date] = tempObj
    else:
        dictionary[date] = {time : usage}

class FirstThread(Thread):
    def run(self):
        #------------------------------------------------------
        global dicCPU
        global diccMemory
        sleep(5)
        date=datetime.today().strftime('%Y-%m-%d')
        currentDateAndTime = datetime.now()
        time = currentDateAndTime.strftime("%H:%M:%S")
        agregarDiccionario(date,time,SystemUsage.getCPUPercent(),dicCPU)
        agregarDiccionario(date,time,SystemUsage.getMemoryPercent(),diccMemory)


def main():
    while True:
        print("...")
        FirstThread().start()
        print(dicCPU)
        print(diccMemory)
        print(json.dumps(dicCPU, indent=4))
        with open("cpudata.json","w") as f:
            json.dump(dicCPU,f,indent=4)
        print(json.dumps(diccMemory, indent=4))
        with open("Memorydata.json","w") as f:
            json.dump(diccMemory,f,indent=4)

if __name__ == '__main__':
    main()

