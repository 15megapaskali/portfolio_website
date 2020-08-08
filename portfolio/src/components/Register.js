import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";

import decoration from '../assets/Decoration.svg';

const regexMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const Register = ({choice})=>{
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [repass,setRepass] = useState("");
    const [success, setSuccess] = useState(false);

    const url = "http://localhost:3008/users"

    useEffect(() => {
        
    }, [])
    const handleLogIn  = (e) =>{
        e.preventDefault();



    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        let obj ={
            user:email,
            password:pass
        }
        if(regexMail.test(email) && pass.length > 4){
            fetch(url,{method:'POST',
                        headers: {
                        "Content-Type": "application/json"
                        },
                    body: JSON.stringify(obj)})
            .then(resp =>resp.json())
            .then(obj => {
                if(pass === repass) {
                    setSuccess(true)
                }
                
            
                
            })}
        
    }



    
    return(
        <div id="login">
            <div className="login-content">
                <div className="login-title">
                    <p className="about-title">Załóż konto</p>
                    <img src={decoration} alt='decoration' id='decoration'></img>
                    {success && <h2 style={{"color":"green"}}>Konto zostało utworzone</h2> }
                </div>
                <div className="login-grey-box">
                    <div className="form-login">
                        <form action="" className="form">
                            <div className="email">
                                <label for="email">Wpisz swój email</label><br/>
                                <input type="email" id="email" name="email" placeholder="" value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
                            </div>
                            <div className="pass">
                                <label for="pass">Hasło</label><br/>
                                <input type="text" id="pass" name="pass" placeholder="" value={pass} onChange={(e)=> setPass(e.currentTarget.value)}/>
                            </div>
                            <div className="pass">
                                <label for="re-pass">Powtórz hasło</label><br/>
                                <input type="text" id="repass" name="repass" placeholder="" value={repass} onChange={(e)=> setRepass(e.currentTarget.value)}/>
                            </div>

                        </form>
                          
                    </div>
                </div>
                <div className="login-buttons">
                    <button onClick={handleSubmit}>Załóż konto</button>
                    <button onClick={(ev)=>{choice('login')}}>Zaloguj się</button>
                </div>
            </div>
        </div>
    )
}

export default Register;