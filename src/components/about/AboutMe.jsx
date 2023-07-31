import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../styles/AboutMe.css'
import { SectionTextAbout, SectionTextAbout2, SectionTextAbout3 } from './AboutMeFunctions';

export default function AboutMe() {
  const [displayed, updateDisplay] = useState("");
  const refText = useRef()

  const message = " Freelance/ Frontend/ Developer/ Based in/ Serbia"

  let delay = 25


  useEffect(() => {

    updateDisplay(message.charAt(0)); // call once to avoid empty element flash
    refText.current = setTimeout(() => {
      setInterval(typeLetter, delay);
    }, 2000);

    return () => {
      updateDisplay("");
      clearTimeout(refText.current)
      clearInterval(refText.current);
    }
  }, [message, delay]); // this make sure it re-renders every time the content changes (return function resets display) 


  const typeLetter = () => {
    updateDisplay(prevText => {
      if (message.length <= prevText.length) clearInterval(refText.current);
      return prevText.concat(message.charAt(prevText.length))
    });
  }
  /************************************ */




  return (
    <motion.div
      className="div-about-container"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="link-nav-container">
        <Link className="link-nav" to="/about">About</Link>
        <Link className="link-nav2" to="/" >Home</Link>
      </div>



      <div className='hello-container'>




        <p className='animated-text-container'>
          <span className="animated-text">{displayed}</span>
        </p>

        <div className='text-transparent-aboutPage-container'>
          <motion.p className='hello-text text-transparent-aboutPage'
            initial={{ x: -450 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, type: 'spring', damping: 10,
            mass: 0.75,
            stiffness: 150, }}
          >HELLO</motion.p>
        </div>



        <SectionTextAbout>
          <p className='hello-text'>I'M A FREELANCE</p>
        </SectionTextAbout>
        <SectionTextAbout2>
          <p className='hello-text'>FRONTEND</p>
        </SectionTextAbout2>
        <SectionTextAbout3>
          <p className='hello-text'>DEVELOPER</p>
        </SectionTextAbout3>

        <motion.div className='container-img'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 3.5 }}
        ></motion.div>


      </div>










      <div className="noise"></div>
    </motion.div>
  )

}

