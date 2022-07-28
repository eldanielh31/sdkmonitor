import React from 'react'
import TableMacs from '../../components/TableMacs/TableMacs'
import Sidebar from '../../components/Sidebar'
import "./mac.css"

function Mac() {
  return (
    <div className='pageMAC'>
      <Sidebar />
      <div className='containerMAC'>
        <div className='containerTopMAC'>
          <h1>MAC Table</h1>
        </div>
       <TableMacs/>
      </div>
    </div>
  )
}

export default Mac
