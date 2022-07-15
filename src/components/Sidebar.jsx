import React from 'react'
import {SidebarData} from './SidebarData'
import "./sidebar.css"

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
        <div className="imagecontainer">
            <img className='logosidebar' src={URL='https://img2.storyblok.com/450x233/smart/filters:quality(100)/f/70749/450x233/eba2433f96/aruba_hp_lockup_reversed.png'} alt="" width= "82%" />
        </div>
        
        <div className="logoutcontainer">
            
            <button class="button-87" >
                Log Out
                </button> 
        </div>

        
    </div>
  )
}

export default Sidebar