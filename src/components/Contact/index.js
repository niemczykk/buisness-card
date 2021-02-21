import React from 'react'
import './Contact.css'

function Contact() {
    return (
        <div className="contactCol" id="contact">
    		<div className="contactRow">
                <img className="icon-contact" src="https://img.icons8.com/carbon-copy/100/000000/apple-mail.png"/>
    			<h1 className="title-contact">GET IN TOUCH!</h1>
    			<p className="text-contact">In case you have an idea for a project or just want to chat, feel free to shoot me an email!</p>
    			<a className="btn-contact" href="mailto:knotek6@gmail.com">Say Hello</a>
    		</div>
		</div>
    )
}

export default Contact
