import React from 'react'
import { SidebarData } from './SidebarData'
import "./sidebar.css"
import LogoutIcon from '@mui/icons-material/Logout';
import image from "./recursos/hpe_pri_grn_rev_rgb-1.png"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUserFailure, deleteUserStart, deleteUserSuccess } from '../redux/userRedux';

function Sidebar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = ()=>{
        dispatch(deleteUserStart());
        try {
            dispatch(deleteUserSuccess())
            navigate('/login')
        } catch (error) {
            dispatch(deleteUserFailure())
            console.log(error);
        }
    };

    return (
        <div className="Sidebar">
            <center>
                <img src={image} className="imgSideBar" />
            </center>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title" > {val.title} </div>
                        </li>
                    );
                })}
            </ul>
            <li
                key={"logout"}
                className="rowLogout"
                onClick={() => {handleClick()}}
            >
                <div id="icon">
                    <LogoutIcon />
                </div>
                <div id="title" >
                    Logout
                </div>
            </li>
        </div>
    )
}

export default Sidebar