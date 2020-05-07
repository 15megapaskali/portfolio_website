import React, { useState } from 'react';
import { Formik } from 'formik';
import decoration from '../assets/Decoration.svg';
const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";
const regexMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexName = /^[a-zA-Z0-9_ ]*$/
const regexText = /[0-9a-zA-Z]{6,}/




const Basic = () => {

  const [success, setSuccess] = useState(false);

//  ustawić jakiś stan i jesli succes true to wtedy renderuj

    

  return <div className="contact-RS">
     <p className="contact-title">Skontaktuj się z nami</p>
     <img src={decoration} alt='decoration' id='decoration'></img>
    <Formik
      initialValues={{ name: '', email: '' , massage:''}}
      validate={values => {
        const errors = {};

        if (!values.name){
            errors.name = 'Pole wymagane';
        } else if(!regexName.test(values.name)) {
            errors.name = 'Podane imię jest nieprawidłowe!';
        }

        if (!values.message) {
            errors.message = 'Pole wymagane';
        } else if (!regexText.test(values.message)){
            errors.message = 'Pole wymagane, co najmniej 120 znaków'
        }

        if (!values.email) {
          errors.email = 'Pole wymagane';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Podany email jest nieprawidłowy!';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, setErrors, resetForm }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
        fetch(API,{
            method:'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(values),
    
        })
        .then(res => res.json())
        .then(values => {
            if (values.status == 'success'){
                    //ustawiasz sobie stan success
                    resetForm(values)
                    setSuccess(true)
            }
            else{
                const errors = {};
                values.errors.forEach(error => {
                    errors[error.param] = error.msg
                })
                    console.log(errors)
                    setErrors(errors)
                    
                
            }
            console.log('Res:', values);
            console.log('Res:', values.status)
            console.log('Res:', values.errors)
            
            
        })
        .catch(values => {
            console.log('Res:', values.status);
            
          });
        
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="form">
            {success && <h2 style={{"color":"green"}}>Wiadomość została wysłana! <br/> Wkrótce się skontaktujemy</h2> }
          
          <div className="form-fline">
            <div className="fname">
                <label for="fname">Wpisz swoje imię</label><br/>
                <input
                    type="name"
                    name="name"
                    id="fname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Krzysztof"
                />
                {errors.name && touched.name && errors.name}
            </div>
          
            <div className="email">
                <label for="email">Wpisz swój email</label><br/>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="abc@xyz.pl"
                />
                {errors.email && touched.email && errors.email}
            </div>
          
          </div>
            <div className="form-sline">
                <label for="message">Wpisz swoją wiadomość</label><br/>
                <input
                    type="text"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                {errors.message && touched.message && errors.message}
            </div>
          
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            Wyślij
          </button>
        </form>
      )}
    </Formik>
  </div>
};

export default Basic;