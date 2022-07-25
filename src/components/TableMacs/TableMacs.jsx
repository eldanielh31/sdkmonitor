import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'
import "./tableMac.css"
import { useSelector } from "react-redux";
import Switch from '@mui/material/Switch';

var MacsData =[]

function CreateDate_TableMac (){

  const data = useSelector(state => state.mac.macs)
  const replace =/,/g
  var MacData = {}
  for (let i = 0; i < data.length; i++) {

    MacData.id = ((i+1));
    MacData.MAC = data[i].mac[0].toString(16).toUpperCase();
    MacData.MAC = MacData.MAC + ':' + data[i].mac[1].toString(16).toUpperCase();
    MacData.MAC = MacData.MAC + ':' + data[i].mac[2].toString(16).toUpperCase();
    MacData.MAC = MacData.MAC + ':' + data[i].mac[3].toString(16).toUpperCase();
    MacData.MAC = MacData.MAC + ':' + data[i].mac[4].toString(16).toUpperCase();
    MacData.MAC = MacData.MAC + ':' + data[i].mac[5].toString(16).toUpperCase();
    MacData.MAC = MacData.MAC.replace(replace, ':')
    MacData.VLAN =  (data[i].vlan_number);
    MacData.Vport =  (data[i].vport.value);
    MacData.PuertoDST = (data[i].precedence_dst_port);
    MacData.Breakpoint = 'x';
    MacsData.push({...MacData});
    console.log (MacData.MAC)
  }
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const columns = [
  { field: 'MAC', headerName: 'MAC', width: 210 },
  { field: 'VLAN', headerName: 'VLAN', width: 200 },
  { field: 'Vport', headerName: 'Vport', width: 200,},
  { field: 'PuertoDST', headerName: 'Puerto DST', width: 200 },
  { 
    field: 'Breakpoint', headerName: 'Breakpoint', width: 200, sortable: false,
    renderCell: () => {
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


const rows = MacsData;



export default function TableMacs() {

  return (
    CreateDate_TableMac(),
    <div style={{ height: 685, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.MAC}
        pageSize={11}
        rowsPerPageOptions={[11]}
      />
    </div>
  );
}