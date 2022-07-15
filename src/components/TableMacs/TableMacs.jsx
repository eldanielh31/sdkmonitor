import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import "./tableMac.css"

var data = require('../../data.json');

const columns = [
  { field: 'MAC', headerName: 'MAC', width: 210 },
  { field: 'VLAN', headerName: 'VLAN', width: 200 },
  { field: 'Vport', headerName: 'Vport', width: 200 },
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

const rows = [
  { id: 1, MAC: 'asdasd', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 2, MAC: 'fsdgdfvb', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 3, MAC: 'sdfwerws', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 4, MAC: 'cvcgrw', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 5, MAC: 'cweqrc', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 6, MAC: 'qgdhjfgh', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 7, MAC: 'cDSADCA', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 8, MAC: 'cdascsdfv', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 9, MAC: 'hnrtnetyu', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
  { id: 10, MAC: 'uynrteue', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint: 'x' },
];


export default function TableMacs() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.MAC}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}