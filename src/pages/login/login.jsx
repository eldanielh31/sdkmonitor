import React from 'react'
import "./login.css"

function Login() {
    return (
        <div>
            <div className='containerLogin'>
                <div className='wrapperLogin'>
                    <h1 className="titleLogin">LOGIN</h1>
                    <form className="formLogin">
                        <div className="groupLogin">
                            <input type="text" className='inputLogin' required />
                            <span className="highlightLogin"></span>
                            <span className="barLogin"></span>
                            <label className='labelLogin'>IP</label>
                        </div>

                        <div className="groupLogin">
                            <input type="password" className='inputLogin' required />
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

                        <div className="groupLogin">
                            <button className="button-57">
                                <span className="text"> LOGIN </span>
                                <span>OK.</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login