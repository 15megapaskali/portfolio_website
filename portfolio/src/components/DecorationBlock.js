import React, {Component,useState,useEffect,} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';

const DecorationBlock = () =>{
    return(
        <div id="deco-block">
            <div className="deco-title">
                <p>Wystarczą 4 proste kroki</p>
                <img src={decoration} alt='decoration' id='decoration'></img>
            </div>
        </div>
    )
}

export default DecorationBlock;