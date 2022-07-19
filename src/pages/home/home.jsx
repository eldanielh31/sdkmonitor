import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./home.css"

function Home() {
  return (
    <div className='pageHOME'>
      <Sidebar />
      <div className='containerHOME'>

        <dic className='containerlogohome'>
          
          <img className='logohome' src={'https://www.arubanetworks.com/wp-content/themes/Aruba2015/images/aruba_hp_lockup_140x68-01.svg'} alt=""  />
        </dic>
        
        <div className ='Titulo1'>SDK Monitor</div>
        
        <div className='Titulo2'>"Creando conexiones que impulsen a las empresas y al mundo."</div>     

      </div>
      
    </div>
  )
}

export default Home