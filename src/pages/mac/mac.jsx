import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./mac.css"
// Para React-Table
import { useTable } from "react-table";
import useRows from "./Hooks/useRows";
import useColumns from "./Hooks/useColumns";
// Para MUI
import { DataGrid } from '@mui/x-data-grid';


// MUI
// Se definen la columnas
const columns = [
  { field: 'id', headerName: 'Id', width:30},
  { field: 'Mac', headerName: 'MAC', width: 150 },
  { field: 'vlan_number', headerName: 'Numero VLAN', width: 130 },
  { field: 'vport', headerName: 'Vport', width: 100 },
  { field: 'presecende_dst_port',headerName: 'Puerto DST',width: 90,},
  { field: 'is_multicast', headerName: 'Multicast', width: 80 },
  { field: 'is_static',headerName: 'Statico',width: 80,},
  { field: 'hit_bit', headerName: 'Hit Bit', width: 80 },
  { field: 'sa_events', headerName: 'Eventos SA', width: 100 },
  { field: 'da_events', headerName: 'Eventos DA', width: 100 },
  { field: 'cpu_priority_sa',headerName: 'Prioridad SA',width: 100,},
  { field: 'cpu_priority_da', headerName: 'Prioridad DA', width: 100 },
  { field: 'mac_sa_group_enable',headerName: 'Grupos MAC SA',width: 120,},
  { field: 'mac_sa_groups', headerName: '# Grupos MAC SA', width: 150 },
  { field: 'mac_da_group_enable', headerName: 'Grupos MAC DA', width: 120 },
  { field: 'mac_da_groups',headerName: '# Grupos MAC DA',width: 150,},
  { field: 'is_mac_sa_only', headerName: 'MAC SA only', width: 120 },
  { field: 'mac_group_id',headerName: 'ID del Mac Group',width: 150,},
];

// Se definen las filas JSON
const rows = [
  {
    id: 1,
    Mac: "C2-54-41-88-11-C4",
    vlan_number: 2915,
    vport: 100,
    presecende_dst_port: 93,
    is_multicast: false,
    is_static: false,
    hit_bit: true,
    sa_events: 10,
    da_events: 6,
    cpu_priority_sa: 20,
    cpu_priority_da: 12,
    mac_sa_group_enable: true,
    mac_sa_groups: 5,
    mac_da_group_enable: true,
    mac_da_groups: 10,
    is_mac_sa_only: false,
    mac_group_id: 44
  }, 
  {
    id: 2,
    Mac: "63-40-97-4C-54-67",
    vlan_number: 2691,
    vport: 29,
    presecende_dst_port: 22,
    is_multicast: true,
    is_static: false,
    hit_bit: false,
    sa_events: 1,
    da_events: 9,
    cpu_priority_sa: 26,
    cpu_priority_da: 17,
    mac_sa_group_enable: false,
    mac_sa_groups: 7,
    mac_da_group_enable: true,
    mac_da_groups: 7,
    is_mac_sa_only: false,
    mac_group_id: 20
  }, 

];

// Se utiliza la funcion DataGrid, y eso hace el mapeo para definir la tabla
function DataTable() {
  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

// React Table
// Creamos la tabla, desde cero, con un mapeo, haciendo el llamado a los diferentes Hooks
function TableMac() {
  const columns = useColumns();
          const data = useRows();
          const table = useTable({ columns, data });

          const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow
          } = table;

          return (
            <div className="container">
              {/* Añadimos las propiedades a nuestra tabla nativa */}
              <table {...getTableProps()}>
                <thead>
                  {
                    // Recorremos las columnas
                    headerGroups.map((headerGroup) => (
                      // Añadimos las propiedades al conjunto de columnas
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                          // Recorremos cada columna del conjunto para acceder a su información
                          headerGroup.headers.map((column) => (
                            // Añadimos las propiedades a cada celda de la cabecera
                            <th {...column.getHeaderProps()}>
                              {
                                // Pintamos el título de nuestra columna (propiedad "Header")
                                column.render("Header")
                              }
                            </th>
                          ))
                        }
                      </tr>
                    ))
                  }
                </thead>
                {/* Añadimos las propiedades al cuerpo de la tabla */}
                <tbody {...getTableBodyProps()}>
                  {
                    // Recorremos las filas
                    rows.map((row) => {
                      // Llamamos a la función que prepara la fila previo renderizado
                      prepareRow(row);
                      return (
                        // Añadimos las propiedades a la fila
                        <tr {...row.getRowProps()}>
                          {
                            // Recorremos cada celda de la fila
                            row.cells.map((cell) => {
                              // Añadimos las propiedades a cada celda de la fila
                              return (
                                <td {...cell.getCellProps()}>
                                  {
                                    // Pintamos el contenido de la celda
                                    cell.render("Cell")
                                  }
                                </td>
                              );
                            })
                          }
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          );
        
}

function Mac() {
  return (
    <div className='pageMAC'>
      <Sidebar />
      <div className='containerMAC'>
        MAC 
        {//cambios
        }
        {TableMac()}
        {DataTable()}
        

          
      </div>
    </div>
  )
}

export default Mac
