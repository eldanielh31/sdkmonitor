import React from 'react'
import { useLocation } from "react-router-dom";

function ShowMac() {

    const location = useLocation()
    const macAddress = location.pathname.split("/")[2];

  return (
    <div>{macAddress}</div>
  )
}

export default ShowMac