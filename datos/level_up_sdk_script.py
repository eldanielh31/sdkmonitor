# Start a new python3 interactive shell to run this commands using
# this bash command: `ip netns exec ntb python3`
from suwa_client.client import Client

client_port = 1943
client_ip = '127.0.0.1'
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

# Print one of the records obtained
print(l2_entries_info[0])

"""
>>> print(l2_entries_info[0])
struct pv_l2_entry_specs {
    pv_mac_addr_t mac = [0, 0, 0, 0, 0, 1];
    pv_vport vport = struct pv_vport {
    pv_vports_type vport_type = 0;
    uint32_t value[9] = [0, 0, 0, 0, 0, 0, 0, 0, 256];
};;
    uint8_t precedence_dst_port = 5;
    uint32_t vlan_number = 1;
    bool is_multicast = False;
    bool is_static = True;
    bool hit_bit = False;
    uint64_t sa_events = 0;
    uint64_t da_events = 0;
    uint8_t cpu_priority_sa = 0;
    uint8_t cpu_priority_da = 0;
    uint32_t mtx_app_ctrl = 0;
    pv_mtx_l2_sa_entry_specs sa_entry_specs = struct pv_mtx_l2_sa_entry_specs {
    bool forward = False;
    uint16_t spare_idx = 0;
    pv_vport sa_vport = struct pv_vport {
    pv_vports_type vport_type = 0;
    uint32_t value[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
};;
    uint8_t mesh_idx = 0;
    bool drop = False;
    uint8_t assist = 0;
    uint8_t in_mirror = 0;
    uint8_t sa_copy_number = 0;
};;
    pv_mtx_l2_da_entry_specs da_entry_specs = struct pv_mtx_l2_da_entry_specs {
    bool ipv4_hw_rtbl = False;
    bool ipv6_hw_rtbl = False;
    uint8_t out_mirror = 0;
    uint16_t spare_idx = 0;
    bool drop = False;
    uint8_t new_cos_value = 0;
    bool cpu_rx_on_bp = False;
    uint8_t assist = 0;
    bool age = False;
    uint8_t da_copy_number = 0;
};;
    bool mac_sa_group_enable = False;
    pv_l2_sa_groups_entry_specs mac_sa_groups = struct pv_l2_sa_groups_entry_specs {
    uint16_t mac_sa_group_0 = 0;
    uint16_t mac_sa_group_1 = 0;
    uint16_t mac_sa_group_2 = 0;
    uint16_t mac_sa_group_3 = 0;
    uint16_t mac_sa_group_4 = 0;
};;
    bool mac_da_group_enable = False;
    pv_l2_da_groups_entry_specs mac_da_groups = struct pv_l2_da_groups_entry_specs {
    uint16_t mac_da_group_0 = 0;
    uint16_t mac_da_group_1 = 0;
    uint16_t mac_da_group_2 = 0;
    uint16_t mac_da_group_3 = 0;
    uint16_t mac_da_group_4 = 0;
};;
    bool is_mac_sa_only = False;
    uint64_t mac_group_id = 0;
};
>>>
"""
