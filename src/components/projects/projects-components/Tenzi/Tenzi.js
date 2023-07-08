import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function Tenzi() {
    const timeRef = useRef()
    const [time, setTime] = useState(0)
    const [count, setCount] = useState(0)
    const [min, setMin] = useState(0)
    const [state, setState] = useState({
        btn1: 0,
        btn2: 0,
        btn3: 0,
        btn4: 0,
        btn5: 0,
        btn6: 0,
        btn7: 0,
        btn8: 0,
        btn9: 0,
        btn10: "0",
    })

    const [click, setClick] = useState({
        click1: true,
        click2: true,
        click3: true,
        click4: true,
        click5: true,
        click6: true,
        click7: true,
        click8: true,
        click9: true,
        click10: true,
    })

    function randomNumber() {
        setState(prev => ({
            ...prev,
            btn1: click.click1 ? Math.floor(Math.random() * 6) + 1 : state.btn1,
            btn2: click.click2 ? Math.floor(Math.random() * 6) + 1 : state.btn2,
            btn3: click.click3 ? Math.floor(Math.random() * 6) + 1 : state.btn3,
            btn4: click.click4 ? Math.floor(Math.random() * 6) + 1 : state.btn4,
            btn5: click.click5 ? Math.floor(Math.random() * 6) + 1 : state.btn5,
            btn6: click.click6 ? Math.floor(Math.random() * 6) + 1 : state.btn6,
            btn7: click.click7 ? Math.floor(Math.random() * 6) + 1 : state.btn7,
            btn8: click.click8 ? Math.floor(Math.random() * 6) + 1 : state.btn8,
            btn9: click.click9 ? Math.floor(Math.random() * 6) + 1 : state.btn9,
            btn10: click.click10 ? Math.floor(Math.random() * 6) + 1 : state.btn10
        }))
    }

    function startAgain() {
        setState(prev => ({
            ...prev,
            btn1: 0,
            btn2: 0,
            btn3: 0,
            btn4: 0,
            btn5: 0,
            btn6: 0,
            btn7: 0,
            btn8: 0,
            btn9: 0,
            btn10: 0,
        }))

        setClick(prev => ({
            ...prev,
            click1: true,
            click2: true,
            click3: true,
            click4: true,
            click5: true,
            click6: true,
            click7: true,
            click8: true,
            click9: true,
            click10: true,
        }))

        setCount(0)
        setTime(0)
        setMin(0)
    }
    const startTime = useCallback(
        () => {
            setTime(prev => prev + 1)
            setCount(prev => prev + 1)

            if (time >= 59) {
                setTime(0)
                setMin(prev => prev + 1)
            }

        },
        [time],
    )

    useEffect(() => {

        if (count > 0) timeRef.current = setInterval(() => {
            startTime()
        }, 1000);

        return () => clearInterval(timeRef.current)
    }, [startTime, count])


    useEffect(() => {
        if (state.btn1 === state.btn2 && (state.btn1 === state.btn2) && (state.btn1 === state.btn3) && (state.btn1 === state.btn4) && (state.btn1 === state.btn5) &&
            (state.btn1 === state.btn6) && (state.btn1 === state.btn7) && (state.btn1 === state.btn8) && (state.btn1 === state.btn9) && (state.btn1 === state.btn10) &&

            ((click.click1 || click.click2 || click.click3 || click.click4 || click.click5 || click.click6 || click.click7 || click.click8 || click.click9 || click.click10) === false)) {
            clearInterval(timeRef.current)
        }
    }, [state.btn1, state.btn2, state.btn3, state.btn4, state.btn5, state.btn6, state.btn7, state.btn8, state.btn9, state.btn10,
    click.click1, click.click2, click.click3, click.click4, click.click5, click.click6, click.click7, click.click8, click.click9, click.click10
    ])



    return (



        <div className="dice-playAgain-container">

            {
                state.btn1 === state.btn2 && (state.btn1 === state.btn2) && (state.btn1 === state.btn3) && (state.btn1 === state.btn4) && (state.btn1 === state.btn5) &&
                    (state.btn1 === state.btn6) && (state.btn1 === state.btn7) && (state.btn1 === state.btn8) && (state.btn1 === state.btn9) && (state.btn1 === state.btn10) &&

                    ((click.click1 || click.click2 || click.click3 || click.click4 || click.click5 || click.click6 || click.click7 || click.click8 || click.click9 || click.click10) === false)


                    ?
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ marginTop: 0 }}>Well done</h1>
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            className="roll-btn"
                            onClick={startAgain}
                        >
                            Play again

                        </motion.button>
                        <p>Your time is {min < 10 ? "0" + min : min}   : {time < 10 ? "0" + time : time}</p>
                    </div>

                    :


                    <div>
                        <div className="dice-container">
                            <div>
                                <button style={{ backgroundColor: click.click1 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click1: !prev.click1 }))}>{state.btn1}</button>
                                <button style={{ backgroundColor: click.click2 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click2: !prev.click2 }))}>{state.btn2}</button>
                                <button style={{ backgroundColor: click.click3 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click3: !prev.click3 }))}>{state.btn3}</button>
                                <button style={{ backgroundColor: click.click4 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click4: !prev.click4 }))}>{state.btn4}</button>
                                <button style={{ backgroundColor: click.click5 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click5: !prev.click5 }))}>{state.btn5}</button>
                            </div>

                            <div>
                                <button style={{ backgroundColor: click.click6 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click6: !prev.click6 }))}>{state.btn6}</button>
                                <button style={{ backgroundColor: click.click7 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click7: !prev.click7 }))}>{state.btn7}</button>
                                <button style={{ backgroundColor: click.click8 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click8: !prev.click8 }))}>{state.btn8}</button>
                                <button style={{ backgroundColor: click.click9 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click9: !prev.click9 }))}>{state.btn9}</button>
                                <button style={{ backgroundColor: click.click10 ? "" : "green" }} onClick={() => setClick(prev => ({ ...prev, click10: !prev.click10 }))}>{state.btn10}</button>
                            </div>



                        </div>

                        <div className="roll-dice-container">

                            {count === 0 ? <motion.button
                                style={{backgroundColor:"orange"}}
                                whileTap={{ scale: 0.8 }}
                                className="roll-btn "
                                onClick={() => {

                                    startTime()
                                }}
                            >
                                Start

                            </motion.button> :



                                <motion.button
                               
                                    whileTap={{ scale: 0.8, backgroundColor: "rgb(0,0,255)" }}
                                    className="roll-btn "
                                    onClick={() => {
                                        randomNumber()

                                    }}
                                >
                                    Roll

                                </motion.button>


                            }




                            <div>
                                <p>{min < 10 ? "0" + min : min}   : {time < 10 ? "0" + time : time}</p>
                            </div>
                        </div>

                    </div>



            }





        </div>
    )
}
