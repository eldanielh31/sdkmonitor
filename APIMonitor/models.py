from datetime import date
import psutil
from .modules import level_up_mocking_script
import json

# Create your models here.

class SystemUsage:

    def filterData(entry, dicc):
        entrada1 = entry.split('|')[0]
        date1 = entrada1.split('T')[0]
        time1 = entrada1.split('T')[1]
        entrada2 = entry.split('|')[1]
        date2 = entrada2.split('T')[0]
        time2 = entrada2.split('T')[1]

        inside = False
        insideTime = False
        dataToSend = []
        for k, v in dicc.items():
            if k == date1:
                inside = True

            if inside:
                for t, u in v.items():
                    if t == time1:
                        insideTime = True
                    if insideTime:
                        dataToSend += u
                    if t == time2:
                        insideTime = False
            if k == date2:
                inside = False
        return dataToSend

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