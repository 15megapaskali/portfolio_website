import React, {Component,useState,useEffect,} from "react";
import Login from "./Login";
import Register from "./Register";
import {Link} from "react-scroll";
import headerpic from '../assets/Home-Hero-Image.jpg';
import decoration from '../assets/Decoration.svg';
const HomeHeader = () => {

    const [login,setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const Bar = () => <div className="bars">
    <div className="login-bar">
        <button onClick={(ev)=>{setLogin(!login)}}>Zaloguj</button>
        <button onClick={(ev)=>{setRegister(!register)}}>Załóż konto</button>
    </div>
    <nav className="nav-bar">
        <ul className="nav-bar-list">
            <li><Link to={'header'} onClick={(ev)=>setLogin(false)&&setRegister(false)}>Start</Link></li>
            <li><Link to={'three-col'}>O co chodzi?</Link></li>
            <li><Link to={'about-us'}>O nas</Link></li>
            <li><Link to={'who-help'}>Fundacja i organizacje</Link></li>
            <li><Link to={'contact'}>Kontakt</Link></li>
        </ul>
    </nav>
</div>


    if (login){
        return(<>
        <Bar/>
        <Login/>
        </>)
    }else if(register){
        return(
        <>
        <Bar/>
        <Register/>
        </>
        )
    }else{
        return(<>
            <Bar/>
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
                            <button className="main-btn">Oddaj rzeczy</button>
                            <button className="main-btn">Zorganizuj</button>
                        </div>
                    </div>
                </div>
            </div>
        </>)
        
    }
    
}

export default HomeHeader;