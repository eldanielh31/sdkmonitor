import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { setMacFailure, setMacStart, setMacSuccess } from '../../redux/macRedux';
// import axios from 'axios';
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux';
import { publicRequest } from '../../requestMethods';
import "./login.css"

function Login() {

    const [textError, setTextError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ip, setIp] = useState("");
    const dispatch = useDispatch();
    const {isFetching} = useSelector(state=>state.user)

    const handleLogin = async () => {
        try {
            let user = { ip, username, password }
            const resIP = await publicRequest.get(`ip/${ip}`)
            if(resIP.data.isCorrect){
                dispatch(loginStart());
                try {
                    const resLogin = await publicRequest.post('login/', user)
                    if (resLogin.data.isCorrect){
                        // dispatch(setMacStart())

                        // const resMac = await axios.get(`http://${ip}/api/mactable/`)
                        // dispatch(setMacSuccess(resMac.data))

                        dispatch(loginSuccess({ ip, username, password }))
                        

                    }else{
                        dispatch(loginFailure())
                        // dispatch(setMacFailure())
                        setTextError("Could not connect the user")
                    }
                } catch (error) {
                    setTextError("Could not read the user")
                    dispatch(loginFailure())
                }
                
            }else{
                setTextError("Could not connect to the IP")
            }
            

        } catch (error) {
            setTextError("Could not read the IP")
        }
    };

    return (
        <div className='containerLogin'>
            <div>
                <div className='groupLogoLogin'>
                    <img src='https://www.arubanetworks.com/wp-content/themes/Aruba2015/images/aruba-logo-small_136x35.svg' alt=''/>
                    <h2 className='subtextLogoLogin'> SDK MONITOR</h2>
                </div>
                <div className='wrapperLogin'>
                    <h1 className="titleLogin">LOGIN</h1>
                    <form className="formLogin">
                        <div className="groupLogin">
                            <input type="text" className='inputLogin' onChange={e => setIp(e.target.value)} />
                            <span className="highlightLogin"></span>
                            <span className="barLogin"></span>
                            <label className='labelLogin'>IP</label>
                        </div>

                        <div className="groupLogin">
                            <input type="text" className='inputLogin' onChange={e => setUsername(e.target.value)} />
                            <span className="highlightLogin"></span>
                            <span className="barLogin"></span>
                            <label className='labelLogin'>User</label>
                        </div>

                        <div className="groupLogin">
                            <input type="password" className='inputLogin' onChange={e => setPassword(e.target.value)} />
                            <span className="highlightLogin"></span>
                            <span className="barLogin"></span>
                            <label className='labelLogin'>Password</label>
                        </div>

                        <span className='errorLogin'> {textError} </span>

                        {isFetching && <span className='loadingLogin'> Loading... </span>}
                    </form>
                    <div className="groupLogin">
                        <button className="button-57" onClick={handleLogin} disabled={isFetching}>
                            <span className="text"> LOG IN </span>
                            <span>OK</span>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Login;