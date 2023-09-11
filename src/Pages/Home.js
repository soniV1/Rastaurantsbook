import React from "react";

import Navbar from "../Components/Navbar";
import BannerImage from "../assets/pizza2.jpg";
import "../Styles/Home.css";

function Home(){
    return (
        <>
        <div>
            <Navbar/>
        <div className="home">
         <div className="headercontainer" style={{ background: `url('${BannerImage}')` }}>ff
         </div>
         <div>
         <a className="test">PIZZA TO FIT ANY TEST</a>
         </div>
         <div>
         <button className="btn">Order Now</button>
         </div>
            </div> 
        </div>
        </>
    )
}

export default Home;