import React, { useState, useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/about/AboutMe";
import Memes from "./components/projects/projects-components/memes_generator/Memes";
import Home from "./components/homePage/Home";
import Quiz from "./components/projects/projects-components/Quiz/Quiz";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tenzi from "./components/projects/projects-components/Tenzi/Tenzi";
import Weather from "./components/projects/projects-components/weather/Weather";
import './styles/Home.css'
import ScrollToTop from "./components/homePage/ScrollToTop";



export default function App() {
    const count = useMotionValue(0)
    const rounded = useTransform(count, Math.round)
    const [load, setLoad] = useState(true)
    const [load2, setLoad2] = useState(false)
    const [random, setRandom] = useState('0')
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")
    const [enter, setEnter] = useState(false)

    function mouseEnterApp() {
        setEnter(true)
        setCursorVariant("text")
    }
    function mouseLeaveApp() {
        setEnter(false)
        setCursorVariant("default")
    }





    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,

        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "rgb(255, 0, 255)",
            // mixBlendMode: "difference",
        }

    }

    useEffect(() => {

        const MousePosition = (e) => {
            const { clientX, clientY } = e
            setMousePosition({ x: clientX, y: clientY })

        }
        window.addEventListener("mousemove", MousePosition)

        return () => {
            window.removeEventListener("mousemove", MousePosition)
        }

    }, [])




    useEffect(() => {
        const animation = animate(count, 100, { duration: 1.5 })
        return animation.stop
    }, [count])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad(false)
        }, 1500)

        let number = Math.floor(Math.random() * 5 + 1).toString()
        setRandom(number)

        return () => {
            clearTimeout(timer)
        }
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoad2(true)
        }, 5000)

        return () => {
            clearTimeout(timer)
        }
    }, [])


    return (
        <div>
            {load ? (
                <motion.div className="loader">{rounded}</motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 1, display: 'block' }}
                    animate={{ opacity: [1, 1, 0.5, 0], display: 'none' }}
                    transition={{ delay: 4 }}
                >
                    <motion.div
                        className="container"
                        initial={{ scale: 6 }}
                        animate={{ scale: [6, 6, 5, 1] }}
                        transition={{ duration: 3, delay: 0.5 }}
                    >
                        <motion.div
                            initial={{ y: 0, backgroundColor: 'black' }}
                            animate={{ y: [-100, -1000] }}
                            transition={{ duration: 2 }}
                            className="m100"
                        ></motion.div>

                        <div className="m1"></div>
                        <div className="m2"></div>
                        <div className="m3"></div>
                        <div className="m4"></div>
                        <div className="m5"></div>

                        <div className="m6"></div>
                        <div className="m7"></div>
                        <div className="m8"></div>
                        <div className="m9"></div>
                        <div className="m10"></div>

                        <div className="m11"></div>
                        <div className="m12"></div>
                        <div className={`img${random}`}></div>
                        <div className="m13"></div>
                        <div className="m14"></div>

                        <div className="m15"></div>
                        <div className="m16"></div>
                        <div className="m17"></div>
                        <div className="m18"></div>
                        <div className="m19"></div>

                        <div className="m20"></div>
                        <div className="m21"></div>
                        <div className="m22"></div>
                        <div className="m23"></div>
                        <div className="m24"></div>
                    </motion.div>
                </motion.div>
            )}

            {load2 &&


                <Routes>

                    <Route path="/" element={<Home mouseEnter={mouseEnterApp} mouseLeave={mouseLeaveApp} />} />
                    <Route path="/about" element={< AboutMe mouseEnterAbout2={mouseLeaveApp} mouseLeaveAbout2={mouseLeaveApp} mouseEnterAbout={mouseEnterApp} mouseLeaveAbout={mouseLeaveApp} />} />
                    <Route path="https://www.linkedin.com/in/milos-mladenovic-8144b6244" />
                    <Route path="/quiz/" element={<Quiz />} />
                    <Route path="/memes" element={<Memes />} />
                    <Route path="/tenzi" element={<Tenzi />} />
                    <Route path="/weather" element={<Weather />} />

                </Routes>


            }

            <ScrollToTop />

            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
                transition={{ duration: 0, delay: 0 }}
            >

            </motion.div>
        </div>


    );

}