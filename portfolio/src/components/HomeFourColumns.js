import React, {Component,useState,useEffect,} from "react";
import {Link} from "react-scroll";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon-4.svg";


const HomeFourColumns = () =>{
    return(
        <div id="four-col">
            <div className="four-col-el">
                <img src={Icon1} alt='icon1' class='icon-pic'></img>
                <p className="four-title-col">
                Wybierz rzeczy
                </p>
                <p className="four-line">
                
                </p>
                <p className="four-desc-title">
                ubrania, zabawki, sprzęt i inne
                </p>
            </div>
            <div className="four-col-el">
                <img src={Icon2} alt='icon2' class='icon-pic'></img>
                <p className="four-title-col">
                Wybierz rzeczy
                </p>
                <p className="four-line">
                
                </p>
                <p className="four-desc-title">
                ubrania, zabawki, sprzęt i inne
                </p>
            </div>
            <div className="four-col-el">
                <img src={Icon3} alt='icon3' class='icon-pic'></img>
                <p className="four-title-col">
                Wybierz rzeczy
                </p>
                <p className="four-line">
                
                </p>
                <p className="four-desc-title">
                ubrania, zabawki, sprzęt i inne
                </p>
            </div>
            <div className="four-col-el">
                <img src={Icon4} alt='icon4' class='icon-pic'></img>
                <p className="four-title-col">
                Wybierz rzeczy
                </p>
                <p className="four-line">
                
                </p>
                <p className="four-desc-title">
                ubrania, zabawki, sprzęt i inne
                </p>
            </div>
            
        
        </div>
    )
}

export default HomeFourColumns;