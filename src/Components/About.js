import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import {BsFillPlayCircleFill} from "react-icons/bs"

export default function About() {
  return (
    <div className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <div className='primary-subheading'>
            <h1 className='primary-heading'>
                Balanced diet is important
            </h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    {""}
                    <BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
      </div>
    </div>
  )
}
