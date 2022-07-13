import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'MAC', headerName: 'MAC', width: 175 },
  { field: 'VLAN', headerName: 'VLAN', width: 170 },
  { field: 'Vport', headerName: 'Vport', width: 170 },
  { field: 'PuertoDST', headerName: 'Puerto DST', width: 170 },
  { field: 'Breakpoint', headerName: 'Breakpoint', width: 170 },
  { field: 'MostrarOtros', headerName: ' ', width: 170 },
];

const rows = [
  { id: 1, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 2, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 3, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 4, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 5, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 6, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 7, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 8, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 9, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
  { id: 10, MAC: 'Snow', VLAN: 'Jon', Vport: '35', PuertoDST: 'x', Breakpoint:'x' },
];

export default function TableMacs() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}