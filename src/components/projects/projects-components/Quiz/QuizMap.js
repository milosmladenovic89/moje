import React, { useState, useEffect } from 'react'


export default function QuizMap(props) {
    const [value, setValue] = useState("")
    const [sum, setSum] = useState(0)




    function inputValue(e) {
        setValue(e.target.id)
    }


    useEffect(() => {
        if (props.answer === value && props.time === 0) {
            setSum(prevSum => prevSum + 25)
           
        }

    }, [props.answer, value, props.time])


  

    return (

        < div value={value}>

            <h2>{props.question}</h2>

            {props.time === 0 && <small style={{ backgroundColor: sum !== 0 ? "white" : "red" }}>This answer gives {sum} points.</small>}
            {(props.time === 0) && <p className="answer">Correct answer : {props.answer}</p>}
            <input disabled={props.time === 0} onChange={inputValue} type={"radio"} id={props.answers1} value={value} name={props.name} />
            <label htmlFor={props.answers1}>{props.answers1}</label> <br />


            <input disabled={props.time === 0} onChange={inputValue} type={"radio"} id={props.answers2} value={value} name={props.name} />
            <label htmlFor={props.answers2}>{props.answers2}</label> <br />


            <input disabled={props.time === 0} onChange={inputValue} type={"radio"} id={props.answers3} value={value} name={props.name} />
            <label htmlFor={props.answers3}>{props.answers3}</label> <br />

            <input disabled={props.time === 0} onChange={inputValue} type={"radio"} id={props.answers4} value={value} name={props.name} />
            <label htmlFor={props.answers4}>{props.answers4}</label> <br />

        </div >

    )
}