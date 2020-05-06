import React, {Component,useState,useEffect} from "react";
import {Link} from "react-scroll";
import { Formik } from 'formik';
import decoration from '../assets/Decoration.svg';
import instagram from '../assets/Instagram.svg';
import facebook from '../assets/Facebook.svg';
const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";


const HomeContact = () =>{
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const regexName = /^[a-zA-Z0-9_ ]*$/
    const [name,setName] = useState("Adam");
    const [email,setEmail] = useState("adam@adam.com");
    const [message,setMessage] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ullam quisquam ducimus consequatur, expedita aspernatur veritatis tenetur vitae quasi in officia dolor perspiciatis quod provident vero cupiditate fugit nihil laboriosam.");
    const obj = {name:name,
                email:email,
                 message:message};


    useEffect(()=>{
        
    },[name,email,message])            

    const handleSubmit = (e)=>{
        console.log(obj)
        e.preventDefault();
        fetch(API,{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(obj),
    
        })
        .then(res => res.json())
        .then(obj => {
            console.log('Success:', obj.status);
            return(
                <h1>{obj.status}</h1>
            )
            
        })
        .catch((error) => {
            console.error('Error:', error.status);
            return(
                <h1>{error}</h1>
            )
          });

        // if(regexName.test(name) && regex.test(email) && message.length > 120) {
            

        // }
        // else {
        //     console.log("nieprawidłowe dane w formularzu")
        // }
        
    }

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
                                <input type="text" id="fname" name="fname" placeholder="Krzysztof" value={name} onChange={(e)=> setName(e.currentTarget.value)}/>
                            </div>
                            <div className="email">
                                <label for="email">Wpisz swój email</label><br/>
                                <input type="email" id="email" name="email" placeholder="abc@xyz.pl" value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
                            </div>
                            
                            
                        </div>
                        <div className="form-sline">
                            <label for="message">Wpisz swoją wiadomość</label><br/>
                            <textarea value={message} onChange={(e)=>setMessage(e.currentTarget.value)} name="message" rows="4"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                            
                            </textarea>
                        </div>
                        <input type="submit" value="Wyślij" onClick={handleSubmit}/>
                        {/* zapiąć event, walidacje formularza, wysłać fatchem do API */}
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