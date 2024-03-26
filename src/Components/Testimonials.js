import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonials() {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">
                Testimonials
            </p>
            <h1 className="primary-subheading">
                What are they saying?
            </h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className='testimonial-section-bottom'>
            <img src={ProfilePic} alt="" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="testimonial-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>
                John Doe
            </h2>
            
        </div>
      
    </div>
  )
}
