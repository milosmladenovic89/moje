import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import memeLogo from "../../../../images/memesLogo1.png"
import memeLogo2 from "../../../../images/memesLogo2.png"
export default function Meme() {
    const [state, setState] = useState([])
    const [err,setErr]=useState("")
    const refInput = useRef()
    const [url, setUrl] = useState("https://i.imgflip.com/1bij.jpg")
    const [value, setValue] = useState({
        input1: "",
        input2: ""
    })
   

    function getPitcure() {
        const randomNumber = Math.floor(Math.random() * state.length)
        const url = state[randomNumber].url
        setUrl(url)
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes").then(res => res.json()).then(data => setState(data.data.memes)).catch((err)=>{setErr(err.message)})
        document.body.style.overflow = "initial"
        refInput.current.focus()
    }, [])


    function inputValues(e) {
        const { name, value } = e.target

        setValue(prev => ({
            ...prev,
            [name]: value
        }))
    }


    return (
        <div className="memes-main-container" >

            <div className="memes-container" >

                <div className="header-memes">

                    <img src={memeLogo} style={{ margin: "0", padding: "20px",width:"80px",height:"80px" }} alt="memes"/>
                    <img style={{ margin: "0", padding: "20px",width:"80px",height:"80px" }} src={memeLogo2}alt="memes" />
                </div>

                <div className="main-memes">
                    <input ref={refInput} onChange={inputValues} className="input-memes" type={"text"} placeholder="Create your top meme.." name="input1" value={value.input1} />
                    <input onChange={inputValues} className="input-memes" type={"text"} placeholder="Create your bottom meme.." name="input2" value={value.input2} />
                </div>

                <div className='btn-memes-container'>
                    <motion.button whileTap={{scale:0.8}} whileHover={{cursor:"pointer", backgroundColor:"rgb(82, 189, 82)",color:"rgb(255,255,255)"}} onClick={getPitcure} className="btn-memes">Generate random image</motion.button>
                </div>
                <div className="img-memes-container">
                    <p className="para-img-memes">{value.input1}</p>
                    <p className="para-img-memes2">{value.input2}</p>
                    <img className="img-memes" alt={`${err}!!!`} src={url} />
                </div>

            </div>

        </div>
    )
}
