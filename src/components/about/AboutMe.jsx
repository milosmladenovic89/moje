import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../../styles/AboutMe.css'
import { SectionTextAbout, SectionTextAbout2, SectionTextAbout3, Section, SectionShowColor1, TextVariants, TextVariants2, TextVariants3, TextVariants4, TextVariants5, TextVariants6, SectionShowColor2, SectionShowColor3, SectionShowColor4, SectionShowColor5, SectionShowColor6 } from './AboutMeFunctions';
import { Logo } from '../homePage/Logo';
import { HashLink } from 'react-router-hash-link'
import { SectionHr, SectionSpanBottom, SectionSpanBottom2 } from '../homePage/HomeFunctions';


export default function AboutMe() {
  const [displayed, updateDisplay] = useState("");
  const [time, setTime] = useState(false)
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


  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(true)
    }, 500);
    return () => {
      clearTimeout(timer)
    }
  }, [])






  return (

    <div id='main2' className='About-page-main-container' style={{ backgroundColor: time ? "black" : '#70b5dd' }}>
      {time}<motion.div
        className="div-about-container"
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <div className="link-nav-container">
          <div className='about-logo-container'>
            <Logo />
          </div>

          <div>
            <Link className="link-nav" to="/about">About</Link>
            <Link className="link-nav2" to="/" >Home</Link>
          </div>

        </div>



        <div className='hello-container' >

          <p className='animated-text-container' >
            <span className="animated-text">{displayed}</span>
          </p>

          <div className='text-transparent-aboutPage-container'>
            <motion.p className='hello-text text-transparent-aboutPage'
              initial={{ x: -450 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5, delay: 0.5, type: 'spring', damping: 10,
                mass: 0.75,
                stiffness: 150,
              }}
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
            transition={{ duration: 3.5, delay: 3.5 }}
          ></motion.div>


        </div>

      </motion.div>

      {time &&
        <div>
          <div className='about-page-text-me'>
            <Section>
              <p className='p-about-me-page'>
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={TextVariants}
                >My name is Miloš. I'm a  frontend developer from Smederevo(Serbia).</motion.span>

                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={TextVariants2}>
                  I'm a father of 1. I love being in the outdoors. </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={TextVariants3}
                >Long walk, riding a bike, playing with my son is just some things i love to do to clear my mind and relax.</motion.span>
              </p>

              <p className='p-about-me-page2'>

                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={TextVariants4}
                >From november 2022 I am certified Javascript Developer - one year education program from ITAcademy(linkgroup), this project is created with React framework.</motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={TextVariants5}
                >I am interested in creating useful relationships between people and technology.</motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true }}
                  variants={TextVariants6}
                >Some of the technologies I'm using:</motion.span>

              </p>
            </Section>

            <p className='largeText-technology'>
              <SectionShowColor1><span >JAVASCRIPT, </span></SectionShowColor1>
              <SectionShowColor2><span>REACT, </span></SectionShowColor2> <SectionShowColor3><span>TYPESCRIPT, </span></SectionShowColor3><SectionShowColor4><span>NEXTJS, </span></SectionShowColor4>  <SectionShowColor5><span>CSS3, </span></SectionShowColor5><SectionShowColor6><span>HTML5, </span></SectionShowColor6>   <SectionShowColor5><span>ADOBE PHOTOSHOP, </span></SectionShowColor5> <SectionShowColor4><span>ADOBE ILLUSTRATOR, </span></SectionShowColor4> <SectionShowColor3></SectionShowColor3><SectionShowColor6><span>BOOTSTRAP, </span></SectionShowColor6> <SectionShowColor2><span>FRAMER-MOTION, </span></SectionShowColor2> <SectionShowColor1><span >GITHUB</span></SectionShowColor1>
            </p>

          </div>


          <div className='two-spans-about'>

            <SectionSpanBottom>
              <span className='span3-about'></span>
            </SectionSpanBottom>


            <SectionSpanBottom2>
              
              <span className='span4'></span>
            </SectionSpanBottom2>
          </div>


          <footer id='footer-about'>


            <div className='footer-left-container-about'>

              <a className='linkedin-link-about' href="https://www.linkedin.com/in/milos-mladenovic-8144b6244" >LinkedIn</a>
              <Link className='linkedin-link-about' to='/MilosMladenovic_CV.pdf' target="_blank"> Curriculum Vitae</Link>
              <a className='linkedin-link-about' href="mailto:milos89mladenovic@gmail.com">Email</a>

            </div>

            <HashLink className='hashLink-about' to={"#main2"}>Back to top ⇧</HashLink>

          </footer>
        </div>
      }


      <div className="noise2"></div>
    </div>
  )

}

