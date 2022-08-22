import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./home.css"


function Home() {

  return (
    <div className='pageHOME'>
      <Sidebar />
      <div className='containerHOME'>

        <div className='fondohome'/>

        <div className='containerlogohome'>
          
        <img className='logohome' src={'https://www.arubanetworks.com/wp-content/themes/Aruba2015/images/aruba-logo-small_136x35.svg'} alt=""   />
        </div>
        
        <div className ='Titulo1'>
          <h5>
            SDK Monitor
          </h5>
        </div>
        
        <div className='Titulo2'>
          
          "Creando conexiones que impulsen a las empresas y al mundo."
          
        </div>     

      </div>
      
    </div>
  )
}

export default Home