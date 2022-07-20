import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./showMac.css"
import { useLocation } from "react-router-dom";
import MacAddress from '../../components/MacAddress/MacAddress';
function ShowMac() {

    const location = useLocation()
    const MacAddressLocation = location.pathname.split("/")[2];
    const replace =/,/g
    const macAddress = MacAddressLocation.replace(replace, ':')
    console.log(macAddress)
  

  return (
    <div className='pageSHOWMAC'>
      <Sidebar />
      <div className='containerSHOWMAC'>
        <div>
          <h1 className='titleMAC'>Mac ID : {macAddress}</h1>
          <div className='MacAddress'>
          <MacAddress mac={MacAddressLocation}/>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default ShowMac