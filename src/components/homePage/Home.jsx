import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'
import { HashLink } from 'react-router-hash-link'
import {
  SectionText0, SectionText3, SectionText3MobileLeft, SectionText3MobileRight, SectionSpanBottom,
  SectionText3Left, SectionImg2, SectionHr, SectionHrRightToLeft, SectionSpan, SectionSpan2,
  SectionSpanBottom2, SectionHover, SectionProjects, SectionProjects2, SectionProjects3, SectionProjects4,
  SectionProjects5, SectionProjects6, SectionHrLast, SectionText03, SectionText01, SectionText02, SectionText04
} from './HomeFunctions'
import { Logo } from './Logo'



export default function Homepage() {
  const [mobile, setMobile] = useState(window.innerWidth)
  const [img, setImg] = useState('bg-1')
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hoverText, setHoverText] = useState(false)
  const [hoverText2, setHoverText2] = useState(false)
  const [hoverText3, setHoverText3] = useState(false)
  const [hoverCircle, setHoverCircle] = useState(false)
  const [hoverArrow, setHoverArrow] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: -120, y: -120 })
  const [timer, setTimer] = useState(false)

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

  let text =  'Milos Mladenovic - Frontend Developer'.split('')
  return (
    <div className="main" id='main'>
      <div>
        <motion.div
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="after"

        >
          <div className="nav-container">
            <Logo/>

            <div>
              <span >
                <Link className="linkNav" to="/about" >
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
                        initial={{ scale: 0,  }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                          delay:1,
                          type: "spring",
                          stiffness: 50,
                          damping: 10
                        }}
                      >

                        <i className="icono-arrow1-left-down" style={{ color: hoverArrow || hoverCircle ? "white" : "black" }}
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

            <SectionHr>
              <hr className='hr' />
            </SectionHr>
          </div>


          <div className="img-cont-main" onMouseOver={changeHover} onMouseOut={changeHover2}>
            <Link to={"./quiz"} className='home-links-toProject' >
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


          <div className="img-cont-main" onMouseOver={changeHover3} onMouseOut={changeHover4}>

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


            <Link to={"./weather"} className='home-links-toProject'>
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

          <div className="img-cont-main" onMouseOver={changeHover} onMouseOut={changeHover2}>
            <Link to={"./memes"} className='home-links-toProject'>
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


          <div className="img-cont-main" onMouseOver={changeHover3} onMouseOut={changeHover4}>

            {mobile > 600 && (
              <SectionText3Left>
                <h2 className="div-desktop-text-left">Tenzi</h2>
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


            <Link to={"./tenzi"} className='home-links-toProject'>
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

          <div className='hr-container' >
            <SectionHrLast>
              <hr className='hr' />
            </SectionHrLast>
          </div>

          <div className='show-on-desktop-only'>

            <div className='showOnHover-container'>
              <p id='para1' className='fonts hovered-paragraph' onMouseOver={hoveredText} onMouseOut={hoveredTextOut}>Lorem ipsum dolor sit amet.
                <span
                  style={{ transform: `translateX(${mousePosition.x}px)` }}
                  className={hoverText ? 'follow-img' : 'follow-img2'} >
                </span>
              </p>


              <p id='para2' className='fonts hovered-paragraph' onMouseOver={hoveredText2} onMouseOut={hoveredTextOut2}>Lorem ipsum dolor sit amet.
                <span
                  style={{ transform: `translateX(${mousePosition.x}px)` }}
                  className={hoverText2 ? 'follow-img-second' : 'follow-img-second2'} >
                </span>
              </p>


              <p id='para3' className='fonts hovered-paragraph' onMouseOver={hoveredText3} onMouseOut={hoveredTextOut3}>Lorem ipsum dolor sit amet.
                <span
                  style={{ transform: `translateX(${mousePosition.x}px)` }}
                  className={hoverText3 ? 'follow-img-third' : 'follow-img-third2'} >
                </span>
              </p>
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

              <a className='linkedin-link' href="https://www.linkedin.com/in/milos-mladenovic-8144b6244" >LinkedIn</a>
              <Link className='linkedin-link' to='/MilosMladenovic_CV.pdf' target="_blank"> Curriculum Vitae</Link>
              <a className='linkedin-link' href="mailto:milos89mladenovic@gmail.com">Email</a>

            </div>

            <HashLink className='hashLink' to={"#main"}>Back to top ⇧</HashLink>

          </footer>


        </motion.div>
      </div >

      <div className="noise"></div>
    </div >
  )
}
