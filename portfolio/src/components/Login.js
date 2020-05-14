import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';

const Login = ()=>{
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");

    return(
        <div id="login">
            <div className="login-content">
                <div className="login-title">
                    <p className="about-title">Zaloguj się</p>
                    <img src={decoration} alt='decoration' id='decoration'></img>
                </div>
                <div className="login-grey-box">
                    <div className="form-login">
                        <form action="" className="form">
                            <div className="email">
                                <label for="email">Email</label><br/>
                                <input type="email" id="email" name="email" placeholder="" value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
                            </div>
                            <div className="pass">
                                <label for="pass">Hasło</label><br/>
                                <input type="text" id="pass" name="pass" placeholder="" value={pass} onChange={(e)=> setPass(e.currentTarget.value)}/>
                            </div>

                        </form>   
                            
                    </div>
                </div>
                <div className="login-buttons">
                    <button className="register-btn">Załóż konto</button>
                    <button className="login-btn">Zaloguj się</button>
                </div>
            </div>
        </div>
    )
}

export default Login;