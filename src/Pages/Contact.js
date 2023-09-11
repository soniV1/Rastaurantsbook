import React from "react";

import Navbar from "../Components/Navbar";
import Form from "../Components/Form"; 
import pizza from '../assets/pizza4.jpg';
import '../Styles/Contact.css'

function Contact(){
    return (
        <>
     <Navbar/>
        <div className="contact">
             <div className="left" style={{ background: `url('${pizza}')` }}></div>
             <div className="right">
              <Form/>   
             </div>
        </div>
        </>
    )
}

export default Contact;