import React from "react";

import Navbar from "../Components/Navbar";
import pizza from '../assets/pizza3.jpg';
import '../Styles/About.css';

function About(){
    return (
        <>
         
             <Navbar/>
             <div className="about">
        <div className="abouttop" style={{ background: `url('${pizza}')` }}></div>
           <div className="aboutbottom">
               <h2>ABOUT US</h2>
               <p>
               We do not recommend using this approach in production. 
               It requires the client to download the entire library—regardless 
               of which components are actually used—which negatively impacts 
               performance and bandwidth utilization.
               We do not recommend using this approach in production. 
               It requires the client to download the entire library—regardless 
               of which components are actually used—which negatively impacts 
               performance and bandwidth utilization.
               We do not recommend using this approach in production. 
               It requires the client to download the entire library—regardless 
               of which components are actually used—which negatively impacts 
               performance and bandwidth utilization.
               </p>
           </div>
           </div>
        </>
    )
}

export default About;