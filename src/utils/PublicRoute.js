import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'

const PublicRoute = () => {

    const currentUser = useSelector(state => state.user.currentUser);
    let auth = currentUser ? false : true;

    return (
        auth? <Outlet /> : <Navigate to='/' />
    )
};

export default PublicRoute