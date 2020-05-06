import React from 'react';
import { Formik } from 'formik';
import decoration from '../assets/Decoration.svg';
const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";
const regexMail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexName = /^[a-zA-Z0-9_ ]*$/

const Basic = () => (
  <div className="contact-RS">
     <p className="contact-title">Skontaktuj się z nami</p>
     <img src={decoration} alt='decoration' id='decoration'></img>
    <Formik
      initialValues={{ name: '', email: '' , text:''}}
      validate={values => {
        const errors = {};
        if (!values.name){
            errors.name = 'Pole wymagane';
        } else if(regexMail.text(values.name)) {
            errors.name = 'Podane imię jest nieprawidłowe!';
        }

        if (!values.text) {
            errors.text = 'Pole wymagane, co najmniej 120 znaków';
        } else if (values.text.length > 120){
            errors.text = ''
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
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        <form onSubmit={handleSubmit}>
          <div className="fname">
          <label for="fname">Wpisz swoje imię</label><br/>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            placeholder="Krzysztof"
          />
          </div>
          {errors.name && touched.name && errors.name}
          <div className="email">
          <label for="email">Wpisz swój email</label><br/>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="abc@xyz.pl"
          />
          </div>
          {errors.email && touched.email && errors.email}
          <div className="form-sline">
          <label for="message">Wpisz swoją wiadomość</label><br/>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.text}
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          </div>
          {errors.text && touched.text && errors.text}
          <button type="submit" disabled={isSubmitting}>
            Wyślij
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;