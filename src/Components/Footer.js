import React from 'react'
import Logo from '../Assets/Logo.svg'
import {BsTwitter} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import {BsYoutube} from 'react-icons/bs'
import {FaFacebook, FaFacebookF} from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className="footer-section-one">  
      <div className="footer-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="footer-icons">
        <BsTwitter/>
        <SiLinkedin/>
        <BsYoutube/>
        <FaFacebookF/>
      </div>
    </div>
    <div className="footer-section-two">
        <div className="footer-section-columns">
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Testimonials</span>
            <span>Work</span>
        </div>
        <div className="footer-section-columns">
            <span>244-3422-1234-123</span>
            <span>hello@food.com</span>
            <span>press@food.com</span>
            <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
        <span>Terms and conditions</span>
            <span>Privacy policy</span>
        </div>
    </div>
    </div>

  )
}
