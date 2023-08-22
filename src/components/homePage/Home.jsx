import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'
import { HashLink } from 'react-router-hash-link'
import {
  SectionText0, SectionText3, SectionText3MobileLeft, SectionText3MobileRight, SectionSpanBottom,
  SectionText3Left, SectionImg2, SectionHr, SectionHrRightToLeft, SectionSpan, SectionSpan2,
  SectionSpanBottom2, SectionHover, SectionProjects, SectionProjects2, SectionProjects3, SectionProjects4,
  SectionProjects5, SectionProjects6, SectionHrLast, SectionText03, SectionText01, SectionText02, SectionText04, SectionImgMosaic1, SectionImgMosaic4, SectionImgMosaic2, SectionImgMosaic3, SectionImgMosaic5, SectionImgMosaic6
} from './HomeFunctions'
import { Logo } from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






export default function Homepage({ mouseEnter, mouseLeave }) {
  const [mobile, setMobile] = useState(window.innerWidth)
  const [img, setImg] = useState('bg-1')
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hoverText, setHoverText] = useState(false)
  const [hoverText2, setHoverText2] = useState(false)
  const [hoverText3, setHoverText3] = useState(false)
  const [hover0, setHover0] = useState(false)
  const [hoverCircle, setHoverCircle] = useState(false)
  const [hoverArrow, setHoverArrow] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: -120, y: -120 })
  const [timer, setTimer] = useState(false)
  const [loadTime, setLoadTime] = useState(false)



  useEffect(() => {
    const interval = setInterval(() => {
      if (img === "bg-1") {
        setImg("bg-2")
      } else if (img === 'bg-2') {
        setImg('bg-3')
      } else if (img === 'bg-3') {
        setImg("bg-4")
      } else if (img === 'bg-4') {
        setImg('bg-5')
      } else if (img === 'bg-5') {
        setImg('bg-6')
      } else if (img === 'bg-6') {
        setImg('bg-7')
      } else if (img === 'bg-7') {
        setImg('bg-1')
      }
    }, 5000);

    return () => {
      clearInterval(interval)
    }
  }, [img])

  useEffect(() => {
    const time = setTimeout(() => {
      setLoadTime(true)
    }, 500);

    return () => {
      clearTimeout(time)
    }

  }, [])


  useEffect(() => {
    const time = setTimeout(() => {
      setTimer(true)
    }, 1500);

    return () => {
      clearTimeout(time)
    }
  }, [])

  useEffect(() => {
    const mobileWidth = () => {
      setMobile(window.innerWidth)
    }
    window.addEventListener('resize', mobileWidth)

    return () => {
      window.removeEventListener('resize', mobileWidth)
    }
  }, [])
  function changeHover0() {
    setHover0(true)
  }
  function changeHover01() {
    setHover0(false)
  }
  function changeHover() {
    setHover(true)
  }
  function changeHover2() {
    setHover(false)
  }

  function changeHover3() {
    setHover2(true)
  }
  function changeHover4() {
    setHover2(false)
  }
  function onCircle() {
    setHoverCircle(true)
  }
  function onOutCircle() {
    setHoverCircle(false)
  }
  function hoverBigArrow() {
    setHoverArrow(true)
  }
  function hoverOutBigArrow() {
    setHoverArrow(false)

  }
  function hoveredText() {
    setHoverText(true)
  }
  function hoveredTextOut() {
    setHoverText(false)
  }
  function hoveredText2() {
    setHoverText2(true)
  }
  function hoveredTextOut2() {
    setHoverText2(false)
  }
  function hoveredText3() {
    setHoverText3(true)
  }
  function hoveredTextOut3() {
    setHoverText3(false)
  }
  useEffect(() => {
    function moveImage(e) {
      const { pageX, PageY } = e
      setMousePosition({ x: pageX, y: PageY })
    }
    window.addEventListener("mousemove", moveImage)

    return () => {
      window.removeEventListener("mousemove", moveImage)
    }
  }, [])

  let text = 'Milos Mladenovic - Frontend Developer'.split('')





  return (
    <div className="main" id='main' onMouseEnter={mouseLeave}>

      <div id='main33'>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="after"

        >
          <div className="nav-container">
            <Logo />

            <div>
              <span >
                <Link className="linkNav" to="/about" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                  About
                </Link>
              </span>
              <span style={{ marginLeft: '100px' }}>
                <Link className="linkNav2" to="/">
                  Home
                </Link>
              </span>
            </div>
          </div>

          <div className="heading">
            <div className={hoverCircle ? "text-transparent" : "fonts"} >
              <SectionText0>
                <p className='heading-paragraph ' style={{ color: hoverArrow ? "white" : hoverCircle ? "transparent" : "black" }}>
                  FREELANCE
                </p>
              </SectionText0>

              <SectionText01>
                <p className='heading-paragraph' style={{ color: hoverArrow ? "white" : hoverCircle ? "transparent" : "black", }}>FRONTEND</p>
              </SectionText01>

              <SectionText02>

                <p className='heading-paragraph' style={{ color: hoverArrow ? "white" : hoverCircle ? "transparent" : "black", }}  >
                  DEVELOPER
                </p>
              </SectionText02>

              <SectionText03>
                <p
                  className="text-transparent heading-paragraph "
                  style={{ color: hoverArrow ? "white" : "transparent", }}
                >
                  BASED IN
                </p>
              </SectionText03>

              <SectionText04>

                <HashLink to={"#arrowHash"} className='arrow-down-hashLink'>

                  <div
                    onMouseOver={hoverBigArrow} onMouseOut={hoverOutBigArrow}
                    className="text-transparent heading-paragraph"
                    style={{ color: hoverArrow ? "white" : "transparent", }}
                  >
                    SERBIA
                    {timer &&
                      <motion.div
                        style={{ display: "inline-block" }}
                        initial={{ scale: 0, }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          delay: 0.5,
                          type: "spring",
                          stiffness: 50,
                          damping: 10
                        }}
                      >

                        <i onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="icono-arrow1-left-down" style={{ color: hoverArrow || hoverCircle ? "white" : "black" }}
                        ></i>
                      </motion.div>
                    }
                  </div>
                </HashLink>

              </SectionText04>

              <motion.div className='circle-master-container'
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 0.5, 1] }}
                transition={{
                  delay: 1, type: 'spring', damping: 5,
                  mass: 1.2,
                  stiffness: 80,
                }}

              >

                <div className="circle-container" onMouseOver={onCircle} onMouseOut={onOutCircle}>
                  <div className="circle">
                    <p className="circleText" style={{ color: hoverCircle || hoverArrow ? "white" : "black", transition: "1s ease" }}>
                      {text.map((item, index) => (
                        <span
                          style={{ transform: `rotate(${index * 9.6}deg)` }}
                          key={index}
                        >
                          {item}
                        </span>
                      ))}
                    </p>
                    <div className={img}></div>
                  </div>
                </div>

              </motion.div>



            </div>


          </div>

        </motion.div>

        {loadTime && <div className='restOfThePage'>


          <div className='two-spans' id="arrowHash" >

            <SectionSpan >
              <span className='span1'></span>
            </SectionSpan>

            <SectionSpan2>
              <span className='span2'></span>
            </SectionSpan2>

          </div>





          <div className='hr-container' >




            <SectionProjects>
              <span className='projects'>P</span>
            </SectionProjects>

            <SectionProjects3>
              <span className='projects'>R</span>
            </SectionProjects3>

            <SectionProjects4>
              <span className='projects'>O</span>
            </SectionProjects4>

            <SectionProjects5>
              <span className='projects'>J</span>
            </SectionProjects5>

            <SectionProjects6>
              <span className='projects'>E</span>
            </SectionProjects6>

            <SectionProjects4>
              <span className='projects'>C</span>
            </SectionProjects4>

            <SectionProjects3>
              <span className='projects'>T</span>
            </SectionProjects3>

            <SectionProjects2>
              <span className='projects'>S</span>
            </SectionProjects2>





            <SectionImgMosaic1>
              <HashLink to={'#mosaic-tenzi'}>
                <div className='m1-homePage img1-mosaic img-hover' >
                  <span className='text-inside-img'>Tenzi game</span>
                </div>

              </HashLink>
            </SectionImgMosaic1>

            <SectionImgMosaic2>
              <HashLink to={"#mosaic-plants"}>
                <div className='m2-homePage img2-mosaic img-hover'>
                  <span className='text-inside-img'>Plants shop</span>
                </div>
              </HashLink>
            </SectionImgMosaic2>

            <SectionImgMosaic3>
              <HashLink to={'#mosaic-weather'}>
                <div className='m3-homePage img3-mosaic img-hover'>
                  <span className='text-inside-img'>Weather app</span>
                </div>
              </HashLink>
            </SectionImgMosaic3>


            <SectionImgMosaic4>
              <HashLink to={'#mosaic-quiz'}>
                <div className='m4-homePage img4-mosaic img-hover'>
                  <span className='text-inside-img'>Quiz game</span>
                </div>
              </HashLink>

            </SectionImgMosaic4>

            <SectionImgMosaic5>
              <HashLink to={'#mosaic-memes'}>
                <div className='m5-homePage img5-mosaic img-hover'>
                  <span className='text-inside-img'>Memes</span>
                </div>
              </HashLink>
            </SectionImgMosaic5>

            <SectionImgMosaic6>
              <HashLink to={"#mosaic-plants"}>
                <span id='animated-arrow'>
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} />
                </span>
              </HashLink>
            </SectionImgMosaic6>

            <SectionHr>

            </SectionHr>
          </div>



          <div className='mosaic-hrContainer'>
            <SectionHr>
              <hr className='hr' />
            </SectionHr>
          </div>


          <div className="img-cont-main" onMouseOver={changeHover0} onMouseOut={changeHover01} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

            {mobile > 600 && (
              <SectionText3Left>
                <AnimatePresence>
                  <h2 className="div-desktop-text-left">Plants</h2>
                  {hover0 && <motion.p className='desktop-description'
                    key={"box05"}
                    transition={{ duration: 0.5 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.6 } }}
                  >Plant shop</motion.p>}

                  {hover0 && <motion.p className='desktop-description'
                    key={"box06"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.4 } }}
                  >Cool design</motion.p>}

                  {hover0 && <motion.p className='desktop-description'
                    key={"box07"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.2 } }}

                  >Awesome animations</motion.p>}
                </AnimatePresence>
              </SectionText3Left>
            )}


            <a href='http://test2.milosmladenovic.rs' className='home-links-toProject'>
              <div className="img-container-plants img-container" id='mosaic-plants'>
                <SectionHover>
                  <h2 className='h2-quiz-left'>Plants</h2>
                </SectionHover>

                <SectionImg2></SectionImg2>
              </div>

            </a>







          </div>


          {mobile < 600 && (
            <SectionText3Left>
              <h2 className="div-mobile-text">Plants</h2>
              <SectionText3MobileLeft>
                <p className='desktop-description'>Weather app</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  Weather and time Api</p>
              </SectionText3MobileRight>

              <SectionText3MobileLeft>
                <p className='desktop-description'>Current time & weather worldwide</p>
              </SectionText3MobileLeft>


            </SectionText3Left>
          )}
















          <div className='mosaic-hrContainer'>
            <SectionHr>
              <hr className='hr' />
            </SectionHr>
          </div>


          <div className="img-cont-main" onMouseOver={changeHover} onMouseOut={changeHover2} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

            <Link to={"./quiz"} className='home-links-toProject' id='mosaic-quiz' >
              <div className="img-container">
                <SectionHover>
                  <h2 className='h2-quiz'>Quiz</h2>
                </SectionHover>

                <SectionImg2></SectionImg2>
              </div>

            </Link>


            {mobile > 600 && (

              <SectionText3>
                <h2 className="div-desktop-text">Quiz</h2>

                <AnimatePresence>

                  {hover && <motion.p
                    className='desktop-description'
                    key={"box1"}
                    transition={{ duration: 0.5 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.6 } }}
                  >
                    Ten different quiz
                  </motion.p>}

                  {hover && <motion.p
                    className='desktop-description'
                    key={"box2"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.4 } }}
                  >
                    Four questions each
                  </motion.p>}
                  {hover && <motion.p
                    className='desktop-description'
                    key={"box3"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.2 } }}
                  >
                    Each time random quiz
                  </motion.p>}
                  {hover && <motion.p
                    className='desktop-description'
                    key={"box4"}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                  >
                    With timer and result
                  </motion.p>}

                </AnimatePresence>

              </SectionText3>

            )}
          </div>

          {mobile < 600 && (
            <SectionText3>
              <h2 className="div-mobile-text">Quiz</h2>


              <SectionText3MobileLeft>
                <p className='desktop-description'>Ten different quiz</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  Four questions each</p>
              </SectionText3MobileRight>

              <SectionText3MobileLeft>
                <p className='desktop-description'>Each time random quiz</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  With timer and result</p>
              </SectionText3MobileRight>

            </SectionText3>
          )}


          <div className='hr-container'>

            <SectionHrRightToLeft>
              <hr className='hr' />
            </SectionHrRightToLeft>
          </div>


          <div className="img-cont-main" onMouseOver={changeHover3} onMouseOut={changeHover4} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>

            {mobile > 600 && (
              <SectionText3Left>
                <AnimatePresence>
                  <h2 className="div-desktop-text-left">Weather</h2>
                  {hover2 && <motion.p className='desktop-description'
                    key={"box5"}
                    transition={{ duration: 0.5 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.6 } }}
                  >Weather app</motion.p>}

                  {hover2 && <motion.p className='desktop-description'
                    key={"box6"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.4 } }}
                  >Weather and time Api</motion.p>}

                  {hover2 && <motion.p className='desktop-description'
                    key={"box7"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.2 } }}

                  >Current time & weather worldwide</motion.p>}
                </AnimatePresence>
              </SectionText3Left>
            )}


            <Link to={"./weather"} className='home-links-toProject' id='mosaic-weather'>
              <div className="img-container img-container-weather">
                <SectionHover>
                  <h2 className='h2-quiz-left'>Weather</h2>
                </SectionHover>

                <SectionImg2></SectionImg2>
              </div>

            </Link>


          </div>

          {mobile < 600 && (
            <SectionText3Left>
              <h2 className="div-mobile-text">Weather</h2>
              <SectionText3MobileLeft>
                <p className='desktop-description'>Weather app</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  Weather and time Api</p>
              </SectionText3MobileRight>

              <SectionText3MobileLeft>
                <p className='desktop-description'>Current time & weather worldwide</p>
              </SectionText3MobileLeft>


            </SectionText3Left>
          )}


          <div className='hr-container'>

            <SectionHr>
              <hr className='hr' />
            </SectionHr>
          </div>

          <div className="img-cont-main" onMouseOver={changeHover} onMouseOut={changeHover2} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <Link to={"./memes"} className='home-links-toProject' id='mosaic-memes'>
              <div className="img-container img-container-memes">
                <SectionHover>
                  <h2 className='h2-quiz'>Memes</h2>
                </SectionHover>

                <SectionImg2></SectionImg2>
              </div>

            </Link>

            {mobile > 600 && (
              <SectionText3>
                <h2 className="div-desktop-text">Memes</h2>
                <AnimatePresence>

                  {hover && <motion.p
                    className='desktop-description'
                    key={"box8"}
                    transition={{ duration: 0.5 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.6 } }}
                  >
                    Memes generator
                  </motion.p>}

                  {hover && <motion.p
                    className='desktop-description'
                    key={"box9"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.4 } }}
                  >
                    Using the Fetch API
                  </motion.p>}
                  {hover && <motion.p
                    className='desktop-description'
                    key={"box10"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.2 } }}
                  >
                    Memes generator
                  </motion.p>}
                  {hover && <motion.p
                    className='desktop-description'
                    key={"box11"}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    initial={{ x: 200, opacity: 0, scale: 0 }}
                    animate={{ x: 50, opacity: 1, scale: 1 }}
                    exit={{ x: 200, opacity: 0, scale: 0, transition: { duration: 0.5 } }}
                  >
                    100 random images
                  </motion.p>}

                </AnimatePresence>
              </SectionText3>
            )}
          </div>

          {mobile < 600 && (
            <SectionText3>
              <h2 className="div-mobile-text">Memes</h2>
              <SectionText3MobileLeft>
                <p className='desktop-description'>Memes generator</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  Using the Fetch API</p>
              </SectionText3MobileRight>

              <SectionText3MobileLeft>
                <p className='desktop-description'>Memes generator</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  100 random images</p>
              </SectionText3MobileRight>
            </SectionText3>
          )}





          <div className='hr-container'>

            <SectionHrRightToLeft>
              <hr className='hr' />
            </SectionHrRightToLeft>
          </div>


          <div className="img-cont-main" onMouseOver={changeHover3} onMouseOut={changeHover4} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >

            {mobile > 600 && (
              <SectionText3Left>
                <h2 className="div-desktop-text-left" >Tenzi</h2>
                <AnimatePresence>

                  {hover2 && <motion.p className='desktop-description'
                    key={"box12"}
                    transition={{ duration: 0.5 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.6 } }}
                  >Tenzi dice game</motion.p>}

                  {hover2 && <motion.p className='desktop-description'
                    key={"box13"}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.4 } }}
                  >Ten random dice</motion.p>}

                  {hover2 && <motion.p className='desktop-description'
                    key={"box14"}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.2 } }}

                  >Roll dice fast</motion.p>}
                  {hover2 && <motion.p className='desktop-description'
                    key={"box15"}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    initial={{ x: -200, opacity: 0, scale: 0 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -200, opacity: 0, scale: 0, transition: { duration: 0.5 } }}

                  >Get same number</motion.p>}
                </AnimatePresence>
              </SectionText3Left>
            )}


            <Link to={"./tenzi"} className='home-links-toProject' id='mosaic-tenzi'>
              <div className="img-container img-container-tenzi">
                <SectionHover>
                  <h2 className='h2-quiz-left'>Tenzi</h2>
                </SectionHover>

                <SectionImg2></SectionImg2>
              </div>

            </Link>


          </div>

          {mobile < 600 && (
            <SectionText3Left>
              <h2 className="div-mobile-text">Tenzi</h2>

              <SectionText3MobileLeft>
                <p className='desktop-description'>Tenzi dice game</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>  Ten random dice</p>
              </SectionText3MobileRight>

              <SectionText3MobileLeft>
                <p className='desktop-description'>Roll dice fast</p>
              </SectionText3MobileLeft>

              <SectionText3MobileRight>
                <p className='desktop-description'>Get same number</p>
              </SectionText3MobileRight>
            </SectionText3Left>
          )}

          <div className='hr-container hr-last-homepage' >
            <SectionHrLast>
              <hr className='hr' />
            </SectionHrLast>
          </div>

          <div className='show-on-desktop-only'>

            <p className='favorite-work'>-My favorite-</p>

            <div className='showOnHover-container'>
              <a href='http://test2.milosmladenovic.rs' className='favorite-work-plants'>
                <p id='para1' className='fonts hovered-paragraph' onMouseOver={hoveredText} onMouseOut={hoveredTextOut}>Plants Webshop
                  <span
                    style={{ transform: `translateX(${mousePosition.x}px)` }}
                    className={hoverText ? 'follow-img' : 'follow-img2'} >
                  </span>
                </p>
              </a>

              <Link to={'./memes'} className='favorite-link-decoration'>
                <p id='para2' className='fonts hovered-paragraph' onMouseOver={hoveredText2} onMouseOut={hoveredTextOut2}>Memes generator
                  <span
                    style={{ transform: `translateX(${mousePosition.x}px)` }}
                    className={hoverText2 ? 'follow-img-second' : 'follow-img-second2'} >
                  </span>
                </p>
              </Link>

              <Link to={'./quiz'} className='favorite-link-decoration'>
                <p id='para3' className='fonts hovered-paragraph' onMouseOver={hoveredText3} onMouseOut={hoveredTextOut3}>Mini quiz app
                  <span
                    style={{ transform: `translateX(${mousePosition.x}px)` }}
                    className={hoverText3 ? 'follow-img-third' : 'follow-img-third2'} >
                  </span>
                </p>
              </Link>
            </div>

          </div>





          <div className='two-spans'>

            <SectionSpanBottom>
              <span className='span3'></span>
            </SectionSpanBottom>


            <SectionSpanBottom2>
              <span className='span4'></span>
            </SectionSpanBottom2>
          </div>


          <footer id='footer'>
            <div className='footer-left-container'>

              <a className='linkedin-link' href="https://www.linkedin.com/in/milos-mladenovic-8144b6244" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >LinkedIn</a>
              <Link className='linkedin-link' to='/MilosMladenovic_CV.pdf' target="_blank" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}> Curriculum Vitae</Link>
              <a className='linkedin-link' href="mailto:milos89mladenovic@gmail.com" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Email</a>

            </div>

            <HashLink className='hashLink' to={"#main"} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>Back to top ⇧</HashLink>

          </footer>



        </div >}
      </div>
      <div className="noise"></div>

    </div >
  )
}
