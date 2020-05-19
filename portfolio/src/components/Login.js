import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";

import decoration from '../assets/Decoration.svg';

const Login = ({choice})=>{
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [user, setUser] = useState(null)

    const url = "http://localhost:3008/users"


    const handleSubmit = (e)=>{
        e.preventDefault();
       
        if(email.length > 2 && pass.length > 4){
            fetch(`${url}?user=${email}&password=${pass}`,{
                method:'GET',
            headers: {
                "Content-Type": "application/json"
              },
              
            })
            .then(response => response.json())
            .then(obj => {
                
                if(obj.length) {
                    setUser(obj[0])
                }

                // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
            }).catch(err => {
                return(
                    <h1>{err}</h1>
                )


                // pod zmienną err mamy dostęp do informacji o błędzie
            })
        }
        else {
            return(
                <h1>"- Login musi być dłuższy niż 2 znaki\n" +
                    "- Hasło musi być dłuższe niż 4 znaki"</h1>
            )
        }
        }

    return(
        <>
        {console.log(user)}
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
                    <button className="register-btn" onClick={(ev)=>{choice('register')}}>Załóż konto</button>
                    <button className="login-btn" onClick={handleSubmit}>Zaloguj się</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;