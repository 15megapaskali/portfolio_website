import Basic from './Basic'
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
                <Basic/>
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