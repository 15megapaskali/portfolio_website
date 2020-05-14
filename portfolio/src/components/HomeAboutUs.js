import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg'
const HomeAboutUs = () =>{
    return(
        <div id="about-us">
            <div className="about-LS">
                <p className="about-title">O nas</p>
                <img src={decoration} alt='decoration' id='decoration'></img>
                <p className="about-desc">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} alt="signature" id="signature"/>
            </div>
            <div className="about-RS">

            </div>
        </div>
    )
}

export default HomeAboutUs;