import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./showMac.css"
import { useLocation } from "react-router-dom";
import MacAddress from '../../components/MacAddress/MacAddress';

function toHexa(array){
  
  var result = ''
  for (let number in array) {
    parseInt(number) + 1 !== array.length ? result += parseInt(array[number]).toString(16) + ':' : result += parseInt(array[number]).toString(16)
  }
  return result
}

function ShowMac() {

    const location = useLocation()
    const MacAddressLocation = location.pathname.split("/")[2];
    const replace =/,/g
    const macAddress = MacAddressLocation.replace(replace, ':')
  

  return (
    <div className='pageSHOWMAC'>
      <Sidebar />
      <div className='containerSHOWMAC'>
        <div>
          <h1 className='titleMAC'>Mac ID : {toHexa(macAddress.split(':'))}</h1>
          <div className='MacAddress'>
          <MacAddress mac={MacAddressLocation}/>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default ShowMac