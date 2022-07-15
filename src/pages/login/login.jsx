import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux';
import "./login.css"

function Login() {

    const [textError, setTextError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ip, setIp] = useState("");
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(loginStart());
        try {
            dispatch(loginSuccess({username, password}))
        } catch (error) {
            dispatch(loginFailure())
            setTextError("Algo salió mal")
        }
    };
    return (
        <div className='containerLogin'>
            <div className='wrapperLogin'>
                <h1 className="titleLogin">Login</h1>
                <form className="formLogin">
                    <div className="groupLogin">
                        <input type="text" className='inputLogin' onChange={e => setIp(e.target.value)} required />
                        <span className="highlightLogin"></span>
                        <span className="barLogin"></span>
                        <label className='labelLogin'>IP</label>
                    </div>

                    <div className="groupLogin">
                        <input type="text" className='inputLogin' onChange={e => setUsername(e.target.value)} required />
                        <span className="highlightLogin"></span>
                        <span className="barLogin"></span>
                        <label className='labelLogin'>User</label>
                    </div>

                    <div className="groupLogin">
                        <input type="password" className='inputLogin' onChange={e => setPassword(e.target.value)} required />
                        <span className="highlightLogin"></span>
                        <span className="barLogin"></span>
                        <label className='labelLogin'>Password</label>
                    </div>

                    <span className='errorLogin'> {textError} </span>

                    <div className="groupLogin">
                        <button className="button-57" onClick={handleLogin}>
                            <span className="text"> LOGIN </span>
                            <span>OK.</span>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Login;