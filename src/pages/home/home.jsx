import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./home.css"

function Home() {
  return (
    <div className='pageHOME'>
      <Sidebar />
      <div className='containerHOME'>
        
        <div className ='Titulo1'>Bienvenido al SDK Monitor</div>
        
        <div className='Titulo2'>Utilice la barra lateral para ingresar a las estadísticas actuales del switch</div>     

      </div>

      
      
    </div>
  )
}

export default Home