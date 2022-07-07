import React, { useEffect, useState } from "react";
import "../About/About.css";

export default function About(){

    const [offsetY, setOffsetY]=  useState(0);
    const handleScroll =() => setOffsetY(window.pageYOffset);
    
      useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return() => window.removeEventListener("scroll", handleScroll);
    },[]);
   

    return(
        <div id="about-main" 
        className="about"
        >
     
        <div className="about-image">
        <h1>ABOUT</h1>
        <img className="reveal"
        width="600" 
        height="400" 
        src="https://cdn.discordapp.com/attachments/980829870651240478/980834767689883658/Sci_Fi_Picture_Blender.png" alt="" />
        </div>

        <div className="about-text"
        >
            
            <p className="highlight-text"> A new open world multi-planetary system created with endless possibilities for escape, on the blockchain. </p>
            
            <div className="about_body-text reveal">
            <p>Live a second digital reality where nothing is off limits. </p>
            <p> Use your Sinister Soul NFTs as playable characters</p>
            <p>EXPLORE. BUILD. OWN. EVOLVE.</p>
            </div>
            <br />

           
       
        <button className="about-btn">CONNECT WALLET</button>
        </div>
        </div>
    )
}