import React from 'react';
import image from '../images/tammy-text.png';
import '../App.css';

const Contact = () => {
    return (
        <div className="contact-card">
            <div>
                <img className='contact-img' src={image} alt='tammy pic'/>
            </div>
            <div className='contact'>
                <h1 style={{textAlign: "center"}} >Debbie Esterlein</h1>
                <h3 style={{ textAlign: "center"}}>Phone:&nbsp;<a style={{textDecoration: "none"}} href="tel:13093730952">309-269-6665</a></h3>
                <h3 style={{textAlign: "center"}}>Email:&nbsp; <a style={{textDecoration: 'none'}} href='mailto:debbie-nbp@gmail.com'>debbie-nbp@gmail.com</a></h3>
                <h3 style={{textAlign: "center"}}>Cash App:&nbsp; $DebraEsterlein</h3>
                <h3 style={{textAlign: "center"}}>Venmo: @debesterlein</h3>
            </div>
            <div>
            
            </div>
        </div>
    )
}

export default Contact;
