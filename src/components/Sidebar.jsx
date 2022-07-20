import React from 'react'
import { SidebarData } from './SidebarData'
import "./sidebar.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUserFailure, deleteUserStart, deleteUserSuccess } from '../redux/userRedux';
import { deleteAllMacSuccess } from '../redux/macRedux';
function Sidebar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(deleteUserStart());
        try {
            dispatch(deleteUserSuccess())
            dispatch(deleteAllMacSuccess())
            navigate('/login')
        } catch (error) {
            dispatch(deleteUserFailure())
            console.log(error);
        }
    };

    return (
        <div className="Sidebar">
            <center>
                <img className='imgSideBar' src={'https://img2.storyblok.com/450x233/smart/filters:quality(100)/f/70749/450x233/eba2433f96/aruba_hp_lockup_reversed.png'} alt="" width="82%" />
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
                onClick={() => { handleClick() }}
            >
                <div id="icon">
                    <LogoutIcon />
                </div>
                <div id="title" >
                    Logout
                </div>
            </li>
        </div >
  )
}

export default Sidebar