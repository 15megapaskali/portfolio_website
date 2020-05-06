import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';

const Register = ()=>{
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [repass,setRepass] = useState("");

    return(
        <div id="login">
            <div className="login-content">
                <div className="login-title">
                    <p className="about-title">Załóż konto</p>
                    <img src={decoration} alt='decoration' id='decoration'></img>
                </div>
                <div className="login-grey-box">
                    <div className="form-login">
                        <div className="email">
                                <label for="email">Wpisz swój email</label><br/>
                                <input type="email" id="email" name="email" placeholder="" value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
                        </div>
                        <div className="pass">
                            <label for="pass">Hasło</label><br/>
                            <input type="text" id="pass" name="pass" placeholder="" value={pass} onChange={(e)=> setPass(e.currentTarget.value)}/>
                        </div>
                        <div className="repass">
                            <label for="re-pass">Hasło</label><br/>
                            <input type="text" id="repass" name="repass" placeholder="" value={repass} onChange={(e)=> setRepass(e.currentTarget.value)}/>
                        </div>
                            
                            
                            
                    </div>
                </div>
                <div className="login-buttons">
                    <button>Załóż konto</button>
                    <button>Zaloguj się</button>
                </div>
            </div>
        </div>
    )
}

export default Register;