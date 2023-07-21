import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'
import { HashLink } from 'react-router-hash-link'


function SectionText({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="anime2">
      <span
        style={{
          lineHeight: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionText3({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="anime22">
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}


function SectionText3MobileLeft({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 1 })
  return (
    <section ref={ref} className="anime-left">
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}


function SectionText3MobileRight({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 1 })
  return (
    <section ref={ref} className="anime-right">
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(200px)',
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}




function SectionText3Left({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="anime22-left">
      <span
        style={{
          opacity: isInView ? 1 : 0,

          transform: isInView ? 'translateX(0)' : 'translateX(200px)',
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionText2({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className="animeTextCenter" ref={ref}>
      <span
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? 'translateX(0)' : 'translateX(1000px)',
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionImage({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="animeImage">
      <span

        style={{
          transform: isInView ? 'scale(1)' : 'scale(0)',
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionImg2({ children }) {

  const [mobile, setMobile] = useState(window.innerWidth)

  useEffect(() => {
    const mobileWidth = () => {
      setMobile(window.innerWidth)
    }
    window.addEventListener('resize', mobileWidth)

    return () => {
      window.removeEventListener('resize', mobileWidth)
    }
  }, [])


  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="animeImage2">
      <span

        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width:
            mobile > 600
              ? isInView
                ? '50vw'
                : '10vw'
              : mobile < 600 && isInView
                ? '80vw'
                : '30vw',
          height:
            mobile > 600
              ? isInView
                ? '55vh'
                : '20vh'
              : mobile < 600 && isInView
                ? '20vh'
                : '10vh',
          zIndex: 999,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionHr({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='animeHr' ref={ref}>
      <span
        style={{
          transformOrigin: "0%",
          width: isInView ? '100%' : '0%',
          transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionHrRightToLeft({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='animeHr-right' ref={ref}>
      <span
        style={{
          transformOrigin: "0%",
          width: isInView ? '100%' : '0%',
          transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
        }}
      >
        {children}
      </span>
    </section>
  )
}


function SectionHrHalf({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='animeHr-half-left' ref={ref}>
      <span
        style={{
          width: isInView ? '50vw' : '0vw',
          transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionHrHalfRight({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='animeHr-half-right' ref={ref}>
      <span
        style={{
          width: isInView ? '50vw' : '0vw',
          transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

function SectionHover({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className='animeHover' ref={ref}>
      <span
        style={{
          //  opacity: isInView ? 1 : 0,
          visibility: isInView ? "visible" : "hidden",
          transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 2s',
        }}
      >
        {children}
      </span>
    </section >
  )
}

export default function Homepage() {
  const [mobile, setMobile] = useState(window.innerWidth)
  const [img, setImg] = useState('bg-1')
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)


  useEffect(() => {
    const interval = setInterval(() => {
      if (img === "bg-1") {
        setImg("bg-2")
      } else if (img === 'bg-2') {
        setImg('bg-3')
      } else if (img === 'bg-3') {
        setImg("bg-1")
      }
    }, 5000);

    return () => {
      clearInterval(interval)
    }
  }, [img])

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

  let text = 'Milos Mladenovic - Frontend Developer'.split('')
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
            <div></div>

            <div>
              <span>
                <Link className="linkNav" to="/about">
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
            <div className="fonts">
              <SectionText>
                <div style={{ position: 'absolute', top: '20%' }}>
                  FREELANCE
                </div>
              </SectionText>
              <SectionText>
                <div style={{ position: 'absolute', top: '30%' }}>FRONTEND</div>
              </SectionText>
              <SectionText>
                <div style={{ position: 'absolute', top: '40%' }}>
                  DEVELOPER
                </div>
              </SectionText>
              <SectionText>
                <div
                  className="text-transparent"
                  style={{ position: 'absolute', top: '50%' }}
                >
                  BASED IN{' '}
                </div>
              </SectionText>
              <SectionText>
                <div
                  className="text-transparent"
                  style={{ position: 'absolute', top: '60%' }}
                >
                  SERBIA
                </div>
              </SectionText>
            </div>

            <SectionImage>
              <div className="circle-container">
                <div className="circle">
                  <p className="circleText">
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
            </SectionImage>
          </div>




          <div className='hr-container-flex'>
            <SectionHrHalf>
              <span className='span-half1'></span>
            </SectionHrHalf>

            <SectionHrHalfRight>
              <span className='span-half2'></span>
            </SectionHrHalfRight>
          </div>





          <div className='hr-container'>
            <SectionText2>
              <span>Projects</span>
            </SectionText2>
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

          <div className='hr-container-flex'>
            <SectionHrHalf>
              <span className='span-half1'></span>
            </SectionHrHalf>

            <SectionHrHalfRight>
              <span className='span-half2'></span>
            </SectionHrHalfRight>
          </div>




          <footer style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>

            <a className='linkedin-link' href="https://www.linkedin.com/in/milos-mladenovic-8144b6244" >LinkedIn</a>
            <HashLink className='hashLink' to={"#main"}>Back to top ⇧</HashLink>

          </footer>


        </motion.div>
      </div >

      <div className="noise"></div>
    </div >
  )
}
