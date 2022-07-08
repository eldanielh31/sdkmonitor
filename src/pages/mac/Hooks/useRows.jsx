import { useMemo } from "react";

export default function useRows() {
  const rows = useMemo(
    () => [
        {
            Mac: "C2-54-41-88-11-C4",
            vlan_number: 2915,
            vport: 100,
            precedence_dst_port: 93,
            is_multicast: "false",
            is_static: "false",
            hit_bit: "true",
            sa_events: 10,
            da_events: 6,
            cpu_priority_sa: 20,
            cpu_priority_da: 12,
            mac_sa_group_enable: "true",
            mac_sa_groups: 5,
            mac_da_group_enable: "true",
            mac_da_groups: 10,
            is_mac_sa_only: "false",
            mac_group_id: 44
        }, 
        {
            Mac: "63-40-97-4C-54-67",
            vlan_number: 2691,
            vport: 29,
            precedence_dst_port: 22,
            is_multicast: "true",
            is_static: "false",
            hit_bit: "false",
            sa_events: 1,
            da_events: 9,
            cpu_priority_sa: 26,
            cpu_priority_da: 17,
            mac_sa_group_enable: "false",
            mac_sa_groups: 7,
            mac_da_group_enable: "true",
            mac_da_groups: 7,
            is_mac_sa_only: "false",
            mac_group_id: 20
        }, 

    ],
    []
  );

  return rows;
}
