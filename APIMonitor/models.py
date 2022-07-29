from datetime import date
from .modules import level_up_mocking_script
import json
from datetime import datetime, timedelta

# Create your models here.

class SystemUsage:
    
    def filterData(entry, dicc):
        dateObj1 = datetime.strptime(entry.split('|')[0], '%Y-%m-%dT%H:%M')
        dateObj2 = datetime.strptime(entry.split('|')[1], '%Y-%m-%dT%H:%M')

        finalList = []
        while(dateObj1 <= dateObj2):
            if(dateObj1.strftime('%Y-%m-%d') in dicc):
                diccMinutes = dicc[dateObj1.strftime('%Y-%m-%d')]
                if(dateObj1.strftime('%H:%M') in diccMinutes):
                    finalList += diccMinutes[dateObj1.strftime('%H:%M')]
            dateObj1 = dateObj1 + timedelta(minutes=1)
        return finalList

    def getCPUPercent(dates):
        with open('cpudata.json', 'r') as f:
            diccCPU = json.load(f)
            f.close()
        return SystemUsage.filterData(dates, diccCPU)

    def getMemoryPercent(dates):
        with open('memorydata.json', 'r') as f:
            diccMemory = json.load(f)
            f.close()
        return SystemUsage.filterData(dates, diccMemory)


class MacTable:
    def getMacTable():
        macList = []
        primitiveTypes = (int, str, bool, float, list, tuple, dict, set)
        for mac in level_up_mocking_script.mac_list:
            macList.append({key: value if isinstance(value, primitiveTypes) else vars(value) for key, value in mac.__dict__.items() if not key.startswith('__')
                and not callable(key)})
        return macList