import React from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../styles/AboutMe.css'


export default function AboutMe() {
  return (
    <motion.div
    className="div-about-container"
    initial={{ y: -1000 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="link-nav-container">
      <div></div>
      <Link className="link-nav" to="/">HOME</Link>
    </div>

    <h1>ABOUT PAGE</h1>
    <div className="noise"></div>
  </motion.div>
)
  
}
