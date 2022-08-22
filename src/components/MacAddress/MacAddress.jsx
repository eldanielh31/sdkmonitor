import * as React from 'react';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux/es/exports';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import './MacAddress.css'

function toHexa(array) {
    var result = ''
    for (let number in array) {
        parseInt(number) + 1 !== array.length ? result += parseInt(array[number]).toString(16) + ':' : result += parseInt(array[number]).toString(16)
    }
    return result
}

function analiceData(listData){
    if (listData[0] === 'mac'){
        return toHexa(listData[1])
    }
    else if (typeof listData[1] === 'number'){
        return listData[1]
    }
    else if (typeof listData[1] === 'boolean') {
        return listData[1]? 'True' : 'False'
    }else{
        return JSON.stringify(listData[1])
    }
}

export default function MacAddress(props) {

    const data = useSelector(state => state.mac.macs);

    const macList = props.mac.split(',').map(item => {return parseInt(item, 10)})
    const filteredMac = data.filter(i => JSON.stringify(i.mac) === JSON.stringify(macList))[0]

  return (
      <div className='containerMacAddress'>

          <TableContainer component={Paper} sx={{ width: 1500, height:700 }}>
              <Table sx={{ minWidth: 700}} aria-label="simple table">
                  <TableBody>
                      {Object.entries(filteredMac).map((row) => (
                          <TableRow
                              key={row[0]}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                              <TableCell component="th" scope="row">
                                  {row[0]}:
                              </TableCell>
                              <TableCell align="right">{ analiceData(row) }</TableCell>
                          </TableRow>
                      ))}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  );
}
