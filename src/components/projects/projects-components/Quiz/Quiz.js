import React, { useState, useEffect, useRef } from 'react'
import dataForQuiz from './QuizData';
import QuizMap from './QuizMap'
import { motion } from 'framer-motion';

export default function Quiz({mouseLeave}) {
    const [count, setCount] = useState(Math.floor(Math.random() * 10))
    const [startQuiz, setStartQuiz] = useState(false)
    const [time, setTime] = useState(60)
    const timeID = useRef()


    const data = dataForQuiz.data[count].map(item => (<QuizMap
        question={item.question}
        key={item.id}
        name={item.name}
        answers1={item.answers[1]}
        answers2={item.answers[2]}
        answers3={item.answers[3]}
        answers4={item.answers[4]}
        answer={item.answer}
        time={time}
    />))


    useEffect(() => {
        if (startQuiz === true) {
            timeID.current = setInterval(() => {
                setTime(prevTime => prevTime - 1)
            }, 1000);
            return () => {
                clearInterval(timeID.current)
            }
        }
    }, [startQuiz])

    useEffect(() => {
        if (time <= 0) {
            clearInterval(timeID.current)
        }
    }, [time])
    useEffect(() => {
        document.body.style.overflow = "initial"
    }, [])

    function quizzStart() {
        setStartQuiz(true)
    }
    function endQuiz() {
        setTime(0)
    }

    function reloadPage() {
        setStartQuiz(false)
        setCount(Math.floor(Math.random() * 10))
        setTime(60)
    }



    return (
        <div onMouseEnter={mouseLeave}>

            {startQuiz ?

                <div className="quiz-container">
                    <div className="timer">Time  {time === 0 ? "expired" : ":" + time + " sec"}</div>
                    <div className="data-container">
                        {data}
                        {time !== 0 && <div style={{ textAlign: "center" }}>< button className="btn-start-end" onClick={endQuiz}>End quiz</button></div>}
                        {time === 0 && <div style={{ textAlign: "center" }}>< button className="btn-start-end" onClick={reloadPage}>Go again</button></div>}
                    </div>
                </div>
                :
                <div className="btn-start-container"><motion.button
                    whileHover={{ backgroundColor: "rgb(255,255,255)", scale: 1.5,cursor:"pointer" }}
                    transition={{ duration: 1 }}
                    className="btn-start-quiz" onClick={quizzStart}>Start random quiz</motion.button></div>
            }


        </div >
    )
}