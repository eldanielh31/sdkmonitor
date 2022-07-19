import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import "./tableMac.css"

var data = require('../../data.json');
var MacsData =[]

function CreateDate_TableMac (){
  var MacData = {}
  for (let i = 0; i < data.length; i++) {
    MacData.id = ((i+1));
    MacData.MAC = (data[i].mac);
    MacData.VLAN =  (data[i].vlan_number);
    MacData.Vport =  (data[i].vport.value);
    MacData.PuertoDST = (data[i].precedence_dst_port);
    MacData.Breakpoint = 'x';
    MacsData.push({...MacData});
  }
}

const columns = [
  { field: 'MAC', headerName: 'MAC', width: 210 },
  { field: 'VLAN', headerName: 'VLAN', width: 200 },
  { field: 'Vport', headerName: 'Vport', width: 200,},
  { field: 'PuertoDST', headerName: 'Puerto DST', width: 200 },
  { field: 'Breakpoint', headerName: 'Breakpoint', width: 200 },
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