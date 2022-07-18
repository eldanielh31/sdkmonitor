import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./showMac.css"
import { useLocation } from "react-router-dom";
import MacAddress from '../../components/MacAddress/MacAddress';
function ShowMac() {

    const location = useLocation()
    const MacAddressLocation = location.pathname.split("/")[2];

  return (
    <div className='pageSHOWMAC'>
      <Sidebar />
      <div className='containerSHOWMAC'>
        <div>
          <h1 className='titleMAC'>Mac Address</h1>
          <div>
            <h2 className='titleMAC'>Mac ID : {MacAddressLocation}</h2>
          </div>
        </div>
          <MacAddress/>
      </div>
    </div>
  )
}

export default ShowMac