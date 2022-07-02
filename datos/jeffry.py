from level_up_mocking_script import mac_list
import json

def pv_l2_sa_groups_entry_specsObjectToDicc(pv_l2_sa_groups_entry_specs):
    tempDicc = {}
    tempDicc["mac_sa_group_0"] = pv_l2_sa_groups_entry_specs.mac_sa_group_0
    tempDicc["mac_sa_group_1"]=pv_l2_sa_groups_entry_specs.mac_sa_group_1
    tempDicc["mac_sa_group_2"]=pv_l2_sa_groups_entry_specs.mac_sa_group_2
    tempDicc["mac_sa_group_3"]=pv_l2_sa_groups_entry_specs.mac_sa_group_3
    tempDicc["mac_sa_group_4"]=pv_l2_sa_groups_entry_specs.mac_sa_group_4

def pv_l2_da_groups_entry_specsObjectToDicc(pv_l2_da_groups_entry_specs):
    tempDicc = {}
    tempDicc["mac_da_group_0"] = pv_l2_da_groups_entry_specs.mac_da_group_0
    tempDicc["mac_da_group_1"]=pv_l2_da_groups_entry_specs.mac_da_group_1
    tempDicc["mac_da_group_2"]=pv_l2_da_groups_entry_specs.mac_da_group_2
    tempDicc["mac_da_group_3"]=pv_l2_da_groups_entry_specs.mac_da_group_3
    tempDicc["mac_da_group_4"]=pv_l2_da_groups_entry_specs.mac_da_group_4


def pv_l2_entry_specsObjectToDicc(pv_l2_entry_specs):
    tempDicc = {}
    tempDicc["mac"] = pv_l2_entry_specs.mac
    tempDicc["vlan_number"] = pv_l2_entry_specs.vlan_number
    tempDicc["vport"]= pv_l2_entry_specs.vport
    tempDicc["precedence_dst_port"]= pv_l2_entry_specs.precedence_dst_port
    tempDicc["is_multicast"]= pv_l2_entry_specs.is_multicast
    tempDicc["is_static"]= pv_l2_entry_specs.is_static
    tempDicc["hit_bit"]= pv_l2_entry_specs.hit_bit
    tempDicc["sa_events"]= pv_l2_entry_specs.sa_events
    tempDicc["da_events"]= pv_l2_entry_specs.da_events
    tempDicc["cpu_priority_sa"]= pv_l2_entry_specs.cpu_priority_sa
    tempDicc["cpu_priority_da"]= pv_l2_entry_specs.cpu_priority_da
    tempDicc["mac_sa_group_enable "]= pv_l2_entry_specs.mac_sa_group_enable 
    tempDicc["mac_sa_groups"]= pv_l2_sa_groups_entry_specsObjectToDicc(pv_l2_entry_specs.mac_sa_groups)
    tempDicc["mac_da_group_enable "]= pv_l2_entry_specs.mac_da_group_enable
    tempDicc["mac_sa_groups"]=pv_l2_da_groups_entry_specsObjectToDicc(pv_l2_entry_specs.mac_da_groups)
    tempDicc["is_mac_sa_only"]=pv_l2_entry_specs.is_mac_sa_only
    tempDicc["mac_group_id"]=pv_l2_entry_specs.mac_group_id



def listpv_l2_entry_specsObjectToListDicc(macList):
    listDiccMac = []
    for mac in macList:
        listDiccMac.append(pv_l2_entry_specsObjectToDicc(mac))
    return listDiccMac

print(listpv_l2_entry_specsObjectToListDicc(mac_list))

