import React from 'react'
import { useSelector } from 'react-redux';
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoute = () => {
  
    const currentUser = useSelector(state => state.user.currentUser);
    let auth = currentUser? true : false;

  return (
    auth? <Outlet/> : <Navigate to='/login'/>
  )
};

export default PrivateRoute