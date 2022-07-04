import React from 'react'
import Sidebar from '../../components/Sidebar'
import AddReactionIcon from '@mui/icons-material/AddReaction';
import "./home.css"

function Home() {
  return (
    <div className='pagueHOME'>
      <Sidebar />
      <div className='containerHOME'>
        Home
      </div>
    </div>
  )
}

export default Home