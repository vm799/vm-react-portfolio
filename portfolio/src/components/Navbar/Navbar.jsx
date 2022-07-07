import React, { useState } from "react";
import "../Navbar/Navbar.css";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { Link, animateScroll} from "react-scroll";



export default function Navbar(){
  
const [open, setOpen] = useState(false);
    return (
        <header>
            <div className="logo"> 
            <Link to="/" smooth={true} duration={3000} onClick ={ () => 
                animateScroll.scrollToTop()}> SYNETIC  </Link>  
            </div>
            <div className="header-list">
            
            <div className="nav__list">
               <ul> <li className="nav__link">
                   <Link to="About" smooth={true} duration={3000}>About</Link></li>
                    <li className="nav__link">
                        <Link to="hero" smooth={true} duration={3000} >Mint</Link></li>
                    <li className="nav__link">
                        <Link to="Staking" smooth={true} duration={3000}>Staking</Link></li>
                    <li className="nav__link">
                        <Link to="Roadmap" smooth={true} duration={3000}>Roadmap</Link></li>
               </ul>
            </div>

            <div className="social-list">
                        <Link className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-discord"></i>
                         </Link>

                         <Link className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-medium"></i>
                        </Link>

                         <Link className="social-list__link" to="https://twitter.com/_sinister_souls">
                         <i className="fab fa-twitter"></i>
                        </Link>
        </div>
            </div>
        
<div className="burger">
           <Burger open={open} setOpen={setOpen} />
           <Menu open={open} setOpen={setOpen} />

           
 </div>
        </header>
       
    )}