import React from 'react'
import TableMacs from '../../components/TableMacs/TableMacs'
import Sidebar from '../../components/Sidebar'
import "./mac.css"

function Mac() {
  return (
    <div className='pageMAC'>
      <Sidebar />
      <div className='containerMAC'>
        <div>
          <h1 className='titleMAC'>MAC Table</h1>
        </div>
       <TableMacs/>
      </div>
    </div>
  )
}

export default Mac
