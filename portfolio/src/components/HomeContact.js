import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';
import instagram from '../assets/Instagram.svg';
import facebook from '../assets/Facebook.svg'


const HomeContact = () =>{
    return(
        <div id="contact">
            <div className="contact-form">
                <div className="contact-LS">

                </div>
                <div className="contact-RS">
                    <p className="contact-title">Skontaktuj się z nami</p>
                    <img src={decoration} alt='decoration' id='decoration'></img>
                    <form action="#" className="form">
                        <div className="form-fline">
                            <div className="fname">
                                <label for="fname">Wpisz swoje imię</label><br/>
                                <input type="text" id="fname" name="fname" placeholder="Krzysztof"/>
                            </div>
                            <div className="email">
                                <label for="email">Wpisz swój email</label><br/>
                                <input type="email" id="email" name="email" placeholder="abc@xyz.pl"/>
                            </div>
                            
                            
                        </div>
                        <div className="form-sline">
                            <label for="message">Wpisz swoją wiadomość</label><br/>
                            <textarea name="message" rows="4"placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                            
                            </textarea>
                        </div>
                        <input type="submit" value="Wyślij"/>
                    </form>
                </div>
            </div>
            <div className="footer">
                <div></div>
                <p>Copyright by Coders Lab</p>
                <div className="social">
                    <Link to={''}><img src={facebook} alt="facebook" id="facebook"/></Link>
                    <Link to={''}><img src={instagram} alt="instagram" id="instagram"/></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeContact;