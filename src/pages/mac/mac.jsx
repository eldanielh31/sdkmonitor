import React from 'react'
import TableMacs from '../../components/TableMacs/TableMacs'
import Sidebar from '../../components/Sidebar'
import "./mac.css"
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setMacSuccess } from '../../redux/macRedux'

function Mac() {

  const dispatch = useDispatch()
  const {ip} = useSelector(state=>state.user.currentUser)

  useEffect(() => {
    async function fetchData() {
      const resMac = await axios.get(`http://${ip}:8000/api/mactable/`)
      dispatch(setMacSuccess(resMac.data))
    }
    fetchData();
  }, [dispatch, ip]);


  return (
    <div className='pageMAC'>
      <Sidebar />
      <div className='containerMAC'>
        <div className='containerTopMAC'>
          <h1>MAC Table</h1>
        </div>
       <TableMacs/>
      </div>
    </div>
  )
}

export default Mac
