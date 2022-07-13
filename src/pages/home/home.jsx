import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./home.css"

function Home() {
  return (
    <div className='pageHOME'>
      <Sidebar />
      <div className='containerHOME'>
        
        <div><h1 className='Titulo1'>Bienvenido -nombre de usuario- al SDK Monitor</h1></div>
        
        <div className='Titulo2'>Utilice la barra lateral para ingresar a las estadísticas actuales del switch</div>
        

        Home
      </div>
    </div>
  )
}

export default Home