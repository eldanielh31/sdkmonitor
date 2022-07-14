import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./showMac.css"
import { useLocation } from "react-router-dom";

function ShowMac() {

    const location = useLocation()
    const macAddress = location.pathname.split("/")[2];

  return (
    <div className='pageSHOWMAC'>
      <Sidebar />
      <div className='containerSHOWMAC'>
        {macAddress}
      </div>
    </div>
  )
}

export default ShowMac