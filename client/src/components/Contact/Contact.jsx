import React from 'react';
import './Contact.scss';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';

function Contact() {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>Be in touch with us</span>
        <div className="mail">
          <input type= 'email' placeholder='Enter your email'/>
          <button>Join us</button>
        </div>
      </div>
      <div className="icons"></div>
        <BsFacebook/>
        <AiOutlineInstagram/>
        <BsTwitter/>
        <FaPinterest/>
    </div>
  )
}

export default Contact;