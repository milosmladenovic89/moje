import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { motion, useInView } from 'framer-motion';
import '../../styles/AboutMe.css'
import { SectionTextAbout, SectionTextAbout2, SectionTextAbout3 } from './AboutMeFunctions';
import { Logo } from '../homePage/Logo';

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
  function Section({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
      <section className="skewImage" ref={ref}>
        <span
          style={{
            transform: isInView ? 'rotate(0deg)scale(1)translateY(10px)' : 'perspective(900px)rotateX(60deg)scale(0.7)',
            opacity: isInView ? 1 : 1,
            transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0s',
          }}
        >
          {children}
        </span>
      </section>
    )
  }

  const TextVariants = {
    offscreen: {
      opacity: 0,

    },
    onscreen: {

      opacity: 1,
      transition: {
        duration: 1,
        amount: 0.8
      }
    }
  };
  const TextVariants2 = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.2
      }
    }
  };
  const TextVariants3 = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3
      }
    }
  };
  const TextVariants4 = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.4
      }
    }
  };

  const TextVariants5 = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5
      }
    }
  };
  const TextVariants6 = {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.6
      }
    }
  };
  return (

    <div className='About-page-main-container' style={{ backgroundColor: time ? "black" : '' }}>
      <motion.div
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



        <div className='hello-container'>

          <p className='animated-text-container'>
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

      <div className='about-page-text-me'>
        <Section>
          <p>




            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 1 }}
              variants={TextVariants}
            >My name is Miloš. I'm a  frontend developer from Smederevo(Serbia).</motion.span>

            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 1 }}
              variants={TextVariants2}>
              I'm a father of 1. I love being in the outdoors. </motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 1 }}
              variants={TextVariants3}
            >Long walk, riding a bike, playing with my son is just some things i love to do to clear my mind and relax.</motion.span>
          </p>

          <p className='p-about-me-page'>

            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 1 }}
              variants={TextVariants4}
            >From november 2022 I am certified Javascript Developer - one year education program from ITAcademy(linkgroup), this project is created with React framework.</motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 1 }}
              variants={TextVariants5}
            >I am interested in creating useful relationships between people and technology.</motion.span>
            <motion.span
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 1 }}
              variants={TextVariants6}
            >Some of the technologies I've used:</motion.span>

          </p>
        </Section>



      </div>


      <div className="noise2"></div>
    </div>
  )

}

