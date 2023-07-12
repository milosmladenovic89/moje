import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'


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
          lineHeight: isInView ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1.8s',
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


export default function Homepage() {
  const [mobile, setMobile] = useState(window.innerWidth)
  const [img, setImg] = useState('bg-1')




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

  let text = 'Milos Mladenovic - Frontend Developer'.split('')
  return (
    <div className="main">
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

          <div className='hr-container'>
            <SectionText2>
              <span>Projects</span>
            </SectionText2>
            <SectionHr>
              <hr className='hr' />
            </SectionHr>
          </div>


          <div className="img-cont-main">
            <Link to={"./quiz"} className='home-links-toProject'>
              <div className="img-container">
                <h2 className='h2-quiz'>QUIZ</h2>
                <SectionImg2></SectionImg2>
              </div>
            </Link>

            {mobile > 600 && (
              <SectionText3>
                <h2 className="div-desktop-text">Quiz</h2>
              </SectionText3>
            )}
          </div>

          {mobile < 600 && (
            <SectionText3>
              <h2 className="div-mobile-text">Quiz</h2>
            </SectionText3>
          )}


          <div className='hr-container'>

            <SectionHrRightToLeft>
              <hr className='hr' />
            </SectionHrRightToLeft>
          </div>


          <div className="img-cont-main">

            {mobile > 600 && (
              <SectionText3>
                <h2 className="div-desktop-text-left">Weather</h2>
              </SectionText3>
            )}


            <Link to={"./weather"} className='home-links-toProject'>
              <div className="img-container img-container-weather">
                <h2 className='h2-quiz'>Weather</h2>
                <SectionImg2></SectionImg2>
              </div>
            </Link>


          </div>

          {mobile < 600 && (
            <SectionText3>
              <h2 className="div-mobile-text">Weather</h2>
            </SectionText3>
          )}


          <div className='hr-container'>

            <SectionHr>
              <hr className='hr' />
            </SectionHr>
          </div>

          <div className="img-cont-main">
            <Link to={"./memes"} className='home-links-toProject'>
              <div className="img-container img-container-memes">
                <h2 className='h2-quiz'>Memes</h2>
                <SectionImg2></SectionImg2>
              </div>
            </Link>

            {mobile > 600 && (
              <SectionText3>
                <h2 className="div-desktop-text">Memes</h2>
              </SectionText3>
            )}
          </div>

          {mobile < 600 && (
            <SectionText3>
              <h2 className="div-mobile-text">Memes</h2>
            </SectionText3>
          )}





          <div className='hr-container'>

            <SectionHrRightToLeft>
              <hr className='hr' />
            </SectionHrRightToLeft>
          </div>


          <div className="img-cont-main">

            {mobile > 600 && (
              <SectionText3>
                <h2 className="div-desktop-text-left">Tenzi</h2>
              </SectionText3>
            )}


            <Link to={"./tenzi"} className='home-links-toProject'>
              <div className="img-container img-container-tenzi">
                <h2 className='h2-quiz'>Tenzi</h2>
                <SectionImg2></SectionImg2>
              </div>
            </Link>


          </div>

          {mobile < 600 && (
            <SectionText3>
              <h2 className="div-mobile-text">Tenzi</h2>
            </SectionText3>
          )}

          <div className='hr-container-flex'>
            <SectionHrHalf>
              <span className='span-half1'></span>
            </SectionHrHalf>

            <SectionHrHalfRight>
              <span className='span-half2'></span>
            </SectionHrHalfRight>
          </div>




          <footer style={{ display: "flex", justifyContent: "space-between" ,padding:"20px"}}>

            <p>Link</p>
            <p>Back to top</p>

          </footer>


        </motion.div>
      </div>

      <div className="noise"></div>
    </div>
  )
}
