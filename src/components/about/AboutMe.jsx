import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../styles/AboutMe.css'


export default function AboutMe() {
  const [displayed, updateDisplay] = useState("");
  const refText = useRef()

  const message = " Freelance / Frontend / Developer / Based in / Serbia"
  let delay = 30


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

      <p className="animated-text">{displayed}</p>


      <div className="noise"></div>
    </motion.div>
  )

}

