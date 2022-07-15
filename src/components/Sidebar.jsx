import React from 'react'
import {SidebarData} from './SidebarData'
import "./sidebar.css"
import image from "./recursos/hpe_pri_grn_rev_rgb-1.png"

function Sidebar() {
  return (
    <div className="Sidebar">
        <ul className="SidebarList">
            {SidebarData.map((val, key)=> {
                return (
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link ? "active" : ""} 
                        onClick={()=>{
                            window.location.pathname = val.link
                        }}
                    > 
                        <div id="icon">{val.icon}</div> <div id="title" > {val.title} </div>
                    </li>
                );
            })}
        </ul>
        <img src={image}  />
    </div>
  )
}

export default Sidebar