import React, { useState, useContext, useRef } from "react";
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Project"

import About from "./components/About/About"
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TextSlider from "./components/TextSlider/TextSlider";
import DotRing from "./components/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";

import {  Menu } from './components';
import { Burger } from './components';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  const [open, setOpen] = useState(false);


  const node = useRef();
  const menuId = "main-menu";

 

function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  for (var i=0; i < reveals.length; i++)  {
    let windowHeight = window.innerHeight;
    let elementTop =
    reveals[i].getBoundingClientRect().top;
    let elementVisible = 2;

    if (elementTop < windowHeight - elementVisible)
    {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

  return(
    <ThemeProvider theme={ theme }>
     <>
      <GlobalStyles />
      <DotRing />

      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
        </div>
      </div>

      <div ref={node}>
          {/* <FocusLock disabled={!open}> */}
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          {/* </FocusLock> */}
      </div>

         <Navbar />
         <Hero />
         <About />
      
         <Projects />
         <TextSlider />
      
         <Contact />
         <Footer /> 
         </>
    </ThemeProvider>
         );
}

export default App;