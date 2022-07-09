import psutil
import json
from threading import Thread

class SystemUsage:
    def getCPUPercent():
        return psutil.cpu_percent()

    def getMemoryPercent():
        return psutil.virtual_memory().percent

class FirstThread(Thread):
    def run(self):
        #------------------------------------------------------
        print(SystemUsage.getCPUPercent())
        print(SystemUsage.getMemoryPercent())


def main():
    while True:
        print("...")
        FirstThread().start()

    


if __name__ == '__main__':
    main()