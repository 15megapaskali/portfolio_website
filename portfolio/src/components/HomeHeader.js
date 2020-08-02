import React, {Component,useState,useEffect,} from "react";
import Login from "./Login";
import Register from "./Register";
import { Link } from 'react-router-dom';

// import {Link} from "react-scroll";
import headerpic from '../assets/Home-Hero-Image.jpg';
import decoration from '../assets/Decoration.svg';
const HomeHeader = () => {

    const [login,setLogin] = useState(false);
    const [register, setRegister] = useState(false);


    if (login){
        return(<>
        
        <Login/>
        </>)
    }else if(register){
        return(
        <>
        
        <Register/>
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
                            <button className="main-btn"><Link to="/login">Oddaj rzeczy</Link></button>
                            <button className="main-btn"><Link to="/login">Zorganizuj</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
        
    }
    
}

export default HomeHeader;