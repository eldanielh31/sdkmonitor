from datetime import date
from .modules import level_up_mocking_script
import json
from datetime import datetime, timedelta
from suwa_client.client import Client

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
        client_port = 1943
        client_ip = '10.0.1.0'
        node_id = 1
        pv = Client(host=client_ip, port=client_port, timeout=None, load_plugins=True)

        # Obtain the vlans created
        vlans_created = pv.pv_vlans_vlan_count_get(node_id)['vlan_count']
        vlans_list = pv.pv_vlans_vlan_list_get(node_id, vlans_created)['vlan_list']

        # Obtain the MAC addresses of the system
        max_l2_entries = pv.pv_l2_entry_count_get(node_id)['count']
        l2_entries_info = []
        for vlan_num in vlans_list:
            result = pv.pv_l2_entries_by_vlan_get(node_id, vlan_num, max_l2_entries)
            l2_entries_info += result['entry_list'][:result['entry_amount']]

        macList = []
        primitiveTypes = (int, str, bool, float, list, tuple, dict, set)
        for mac in l2_entries_info:
            macList.append({key: value if isinstance(value, primitiveTypes) else vars(value) for key, value in mac.__dict__.items() if not key.startswith('__')
                and not callable(key)})
        return macList