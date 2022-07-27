import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import "./tableMac.css"
import { useSelector } from "react-redux";
import Switch from '@mui/material/Switch';

const columns = [
  { field: 'mac', headerName: 'MAC', width: 210 },
  { field: 'vlan_number', headerName: 'VLAN', width: 200 },
  { field: 'vport', headerName: 'Vport', width: 200,},
  { field: 'precedence_dst_port', headerName: 'Puerto DST', width: 200 },
  { 
    field: 'Breakpoint', headerName: 'Breakpoint', width: 200, sortable: false,
    renderCell: () => {
      let label = { inputProps: { 'aria-label': 'Switch demo' } };
      return (
        <>
          <Switch {...label } defaultChecked color="warning" />
        </>
      )
    }
  },
  {
    field: 'MostrarOtros', headerName: 'Action', width: 120, sortable: false,
    renderCell: (params) => {
      return (
        <>
          <form action={"/showmac/" + params.id}>
            <button className="button-1">Show more</button>
          </form>
        </>
      )
    }
  }
];

export default function TableMacs() {
  const data = useSelector(state => state.mac.macs)
  return (
    // CreateDate_TableMac(),
    <div style={{ height: 685, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.mac}
        pageSize={11}
        rowsPerPageOptions={[11]}
      />
    </div>
  );
}