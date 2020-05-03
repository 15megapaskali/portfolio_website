import React, {Component,useState,useEffect,} from "react";
import {Link} from "react-scroll";

const HomeThreeColumns = () =>{
    return(
        <div id="three-col">
            <div className="col-el">
                <p className="title-col">
                10
                </p>
                <p className="subtitle-col">
                ODDANYCH WORKÓW
                </p>
                <p className="desc-title">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>
            <div className="col-el">
                <p className="title-col">
                5
                </p>
                <p className="subtitle-col">
                WSPARTYCH ORGANIZACJI
                </p>
                <p className="desc-title">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </p>
            </div>
            <div className="col-el">
                <p className="title-col">
                7
                </p>
                <p className="subtitle-col">
                ZORGANIZOWANY ZBIÓREK
                </p>
                <p className="desc-title">
                Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.     
                </p>
            </div>
        
        </div>
    )
}


export default HomeThreeColumns;