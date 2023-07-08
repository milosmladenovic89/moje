import React from 'react'
import emailjs from "emailjs-com"

export default function ContactForm(props) {


    function sentEmail(e) {
        e.preventDefault()

        emailjs.sendForm("service_p430r0p",
            "template_9m7tfnp",
            e.target,
            "fE8_RduY_O3Im4jeU").then(res => console.log(res)).then(err => console.log(err))

    }




    return (

        <div className="contact-form" >

            <h2 style={{ color: "transparent" }}>Contact form</h2>
            <div>
                <button className='hover-close-form' onClick={props.displayFrom} style={{ textAlign: "right", padding: "5px 10px" }}>x</button>
            </div>

            <div className="contact-form-container">

                <form id="form-contact-main" onSubmit={sentEmail}>

                    <div className="inside-form">
                        <label>Name</label>
                        <input type={"text"} style={{ width: "100%", padding: "5px" }} name="name" placeholder="Enter your name" />
                    </div>

                    <div className="inside-form">
                        <label>Email</label>
                        <input type={"text"} style={{ width: "100%", padding: "5px" }} name="user_email" placeholder="Enter your email" />
                    </div>

                    <div className="inside-form">
                        <label>Message me</label>
                        <textarea style={{ textAlign: "center", width: "100%" }} name="message" rows="5" placeholder="Message" />
                    </div>
                    <div className="inside-form">
                        <input onClick={() => alert("Message sent")} style={{ width: "100%", marginBottom: "20px", padding: "5px", }} type={"submit"} value="Send" />
                    </div>

                </form>
            </div>


        </div>
    )
}
