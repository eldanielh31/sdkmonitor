import psutil
from .modules import level_up_mocking_script

# Create your models here.

class SystemUsage:
    def getCPUPercent(dates):
        return psutil.cpu_percent()

    def getMemoryPercent(dates):
        return psutil.virtual_memory().percent


class MacTable:

    def pv_l2_sa_groups_entry_specsObjectToDicc(pv_l2_sa_groups_entry_specs):
        tempDicc = {}
        tempDicc["mac_sa_group_0"] = pv_l2_sa_groups_entry_specs.mac_sa_group_0
        tempDicc["mac_sa_group_1"] = pv_l2_sa_groups_entry_specs.mac_sa_group_1
        tempDicc["mac_sa_group_2"] = pv_l2_sa_groups_entry_specs.mac_sa_group_2
        tempDicc["mac_sa_group_3"] = pv_l2_sa_groups_entry_specs.mac_sa_group_3
        tempDicc["mac_sa_group_4"] = pv_l2_sa_groups_entry_specs.mac_sa_group_4
        return tempDicc

    def pv_l2_da_groups_entry_specsObjectToDicc(pv_l2_da_groups_entry_specs):
        tempDicc = {}
        tempDicc["mac_da_group_0"] = pv_l2_da_groups_entry_specs.mac_da_group_0
        tempDicc["mac_da_group_1"] = pv_l2_da_groups_entry_specs.mac_da_group_1
        tempDicc["mac_da_group_2"] = pv_l2_da_groups_entry_specs.mac_da_group_2
        tempDicc["mac_da_group_3"] = pv_l2_da_groups_entry_specs.mac_da_group_3
        tempDicc["mac_da_group_4"] = pv_l2_da_groups_entry_specs.mac_da_group_4
        return tempDicc

    def vportObjectToDicc(vport):
        tempDicc = {}
        tempDicc["vport_type"] = vport.vport_type
        tempDicc["value"] = vport.value
        return tempDicc

    def pv_l2_entry_specsObjectToDicc(pv_l2_entry_specs):
        tempDicc = {}
        tempDicc["mac"] = pv_l2_entry_specs.mac
        tempDicc["vlan_number"] = pv_l2_entry_specs.vlan_number
        tempDicc["vport"] = MacTable.vportObjectToDicc(pv_l2_entry_specs.vport)
        tempDicc["precedence_dst_port"] = pv_l2_entry_specs.precedence_dst_port
        tempDicc["is_multicast"] = pv_l2_entry_specs.is_multicast
        tempDicc["is_static"] = pv_l2_entry_specs.is_static
        tempDicc["hit_bit"] = pv_l2_entry_specs.hit_bit
        tempDicc["sa_events"] = pv_l2_entry_specs.sa_events
        tempDicc["da_events"] = pv_l2_entry_specs.da_events
        tempDicc["cpu_priority_sa"] = pv_l2_entry_specs.cpu_priority_sa
        tempDicc["cpu_priority_da"] = pv_l2_entry_specs.cpu_priority_da
        tempDicc["mac_sa_group_enable "] = pv_l2_entry_specs.mac_sa_group_enable
        tempDicc["mac_sa_groups"] = MacTable.pv_l2_sa_groups_entry_specsObjectToDicc(
            pv_l2_entry_specs.mac_sa_groups)
        tempDicc["mac_da_group_enable "] = pv_l2_entry_specs.mac_da_group_enable
        tempDicc["mac_da_groups"] = MacTable.pv_l2_da_groups_entry_specsObjectToDicc(
            pv_l2_entry_specs.mac_da_groups)
        tempDicc["is_mac_sa_only"] = pv_l2_entry_specs.is_mac_sa_only
        tempDicc["mac_group_id"] = pv_l2_entry_specs.mac_group_id
        return tempDicc

    def listpv_l2_entry_specsObjectToListDicc(macList):
        newlistDiccMac = []
        for mac in macList:
            newlistDiccMac.append(MacTable.pv_l2_entry_specsObjectToDicc(mac))
        return newlistDiccMac

    def getMacTable():
        return MacTable.listpv_l2_entry_specsObjectToListDicc(level_up_mocking_script.mac_list)