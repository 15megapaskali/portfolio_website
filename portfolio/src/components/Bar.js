import React, {Component,useState,useEffect,} from "react";

import {Link} from "react-scroll";
import headerpic from '../assets/Home-Hero-Image.jpg';
import decoration from '../assets/Decoration.svg';
const Bar = ({choice}) => {
    const [login,setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return(
        
        <div className="bars">
            
            
            <div className="login-bar">
                <button onClick={(ev)=>{choice('login')}}>Zaloguj</button>
                <button onClick={(ev)=>{choice('register')}}>Załóż konto</button>
            </div>
            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <li><Link to={'header'} onClick={(ev)=>choice(false)}>Start</Link></li>
                    <li><Link to={'three-col'}>O co chodzi?</Link></li>
                    <li><Link to={'about-us'}>O nas</Link></li>
                    <li><Link to={'who-help'}>Fundacja i organizacje</Link></li>
                    <li><Link to={'contact'}>Kontakt</Link></li>
                </ul>
            </nav>
            
            
        </div>
    )
}

export default Bar;

