import React from 'react'
import CollapsibleTable from '../../components/collapsibleTable/collapsibleTable'
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
       <CollapsibleTable/>
      </div>
    </div>
  )
}

export default Mac
