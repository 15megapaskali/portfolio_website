import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import decoration from '../assets/Decoration.svg';



const HomeWhoWeHelp = () =>{
    return(
        <div id="who-help">
            <div className="who-title">
                <p className="contact-title">Komu pomagamy?</p>
                <img src={decoration} alt='decoration'></img>
            </div>
            <div className="who-buttons">
                <button className="main-btn">Fundacjom</button>
                <button className="main-btn">Organizacjom pozarządowym</button>
                <button className="main-btn">Lokalnym zbiórkom</button>
            </div>
            <div className="who-desc">
                <p>
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                </p>
            </div>
            <div className="who-list">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p className="fp">Fundacja “Dbam o Zdrowie”</p>
                                <p className="sp">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </td>
                            <td>
                                <p className="sc">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="fp">Fundacja “Dla dzieci”</p>
                                <p className="sp">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                            </td>
                            <td>
                                <p className="sc">ubrania, meble, zabawki</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className="fp">Fundacja “Bez domu”</p>
                                <p className="sp">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                            </td>
                            <td>
                                <p className="sc">ubrania, jedzenie, ciepłe koce</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="pages">
                <button className="main-btn">1</button>
                <button className="main-btn">2</button>
                <button className="main-btn">3</button>
            </div>
        </div>
    )
}

export default HomeWhoWeHelp;