import React, {Component,useState,useEffect,} from "react";
import Login from "./Login";
import Register from "./Register";
import { Link } from 'react-router-dom';
import Home from "./Home";
// import {Link} from "react-scroll";
import headerpic from '../assets/Home-Hero-Image.jpg';
import decoration from '../assets/Decoration.svg';
const HomeHeader = ({choice}) => {
    const [stan, setStan] = useState('');

    const handleStanHome = (arg) =>{
    setStan(arg);
    setRegister(!register)
    setLogin(!login)
    }

    const [login,setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    console.log('stan', stan);

    if (login){
        return(<>
        
        <Login props={stan} choice={handleStanHome}/>
        </>)
    }else if(register){
        return(
        <>
        
        <Register props={stan} choice={handleStanHome}/>
        </>
        )
    }else{
        return(<>
            
            <div id="header">
                
                <div className="header-LS">
                   
                </div>
                <div className="header-RS">
                    
                    <div className="header-content">
                        <div className="header-title">
                            <p>Zacznij pomagać!</p>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                            <img src={decoration} alt='decoration' id='decoration'></img>
                        </div>
                        <div className="buttons-contener">
                            <button className="main-btn" onClick={(ev)=>{choice('login')}}>Oddaj rzeczy</button>
                            <button className="main-btn" onClick={(ev)=>{choice('login')}}>Zorganizuj</button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
        
    }
    
}

export default HomeHeader;