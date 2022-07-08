import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "MAC",
        accessor: "Mac"
      },
      {
        Header: "Numero VLAN",
        accessor: "vlan_number"
      },
      {
        Header: "Vport",
        accessor: "vport"
      },
      {
        Header: "Puerto DST",
        accessor: "precedence_dst_port"
      },
      {
        Header: "Multicast",
        accessor: "is_multicast"
      },
      {
        Header: "Estatico",
        accessor: "is_static"
      },
      {
        Header: "Hit Bit",
        accessor: "hit_bit"
      },
      {
        Header: "Eventos SA",
        accessor: "sa_events"
      },
      {
        Header: "Eventos DA",
        accessor: "da_events"
      },
      {
        Header: "Prioridad SA",
        accessor: "cpu_priority_sa"
      },
      {
        Header: "Prioridad DA",
        accessor: "cpu_priority_da"
      },
      {
        Header: "Grupos MAC SA",
        accessor: "mac_sa_group_enable"
      },
      {
        Header: "# Grupos MAC SA",
        accessor: "mac_sa_groups"
      },
      {
        Header: "Grupos MAC DA",
        accessor: "mac_da_group_enable"
      },
      {
        Header: "# Grupos MAC DA",
        accessor: "mac_da_groups"
      },
      {
        Header: "MAC SA only",
        accessor: "is_mac_sa_only"
      },
      {
        Header: "ID del Mac Group",
        accessor: "mac_group_id"
      },

    ],
    []
  );
  
  return columns;
}
