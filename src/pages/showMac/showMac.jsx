import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./showMac.css"
import { useLocation } from "react-router-dom";
import MacAddress from '../../components/MacAddress/MacAddress';

function ShowMac() {

    const location = useLocation()
    const MacAddress = location.pathname.split("/")[2];

  return (
    <div className='pageSHOWMAC'>
      <Sidebar />
      <div className='containerSHOWMAC'>
        {MacAddress}
      </div>
    </div>
  )
}

export default ShowMac