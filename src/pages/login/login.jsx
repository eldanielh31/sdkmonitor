import React, { useEffect, useState } from 'react'
import "./login.css"

function Login() {
    
    const [user, setUser] = useState(null);

    const [textError, setTextError] = useState("");

    const handleLogin = ()=>{
        setUser(true);
        setTextError("Error");
    };

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user]);

    return (
        <div className='containerLogin'>
            <div className='wrapperLogin'>
                <h1 className="titleLogin">Login</h1>
                <form className="formLogin">
                    <div className="groupLogin">
                        <input type="text" className='inputLogin' required />
                        <span className="highlightLogin"></span>
                        <span className="barLogin"></span>
                        <label className='labelLogin'>IP</label>
                    </div>

                    <div className="groupLogin">
                        <input type="text" className='inputLogin' required />
                        <span className="highlightLogin"></span>
                        <span className="barLogin"></span>
                        <label className='labelLogin'>User</label>
                    </div>

                    <div className="groupLogin">
                        <input type="password" className='inputLogin' required />
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