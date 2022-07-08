import React from 'react'
import Sidebar from '../../components/Sidebar'
import "./home.css"

function Home() {
  return (
    <div className='pageHOME'>
      <Sidebar />
      <div className='containerHOME'>
        Home
      </div>
    </div>
  )
}

export default Home