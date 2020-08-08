import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";

const ButtonOddajRzcz = ({choice}) =>{
    return(
        <div id="btnOddaj">
            <button className="main-btn" onClick={(ev)=>{choice('login')}}>Oddaj rzeczy</button>
        </div>
    )
}

export default ButtonOddajRzcz;