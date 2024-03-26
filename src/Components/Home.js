import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'
export default function Home() {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-selection">
          <h1 className="primary-heading">
            Your favorite food delivered Hot & Fresh
          </h1>
          <p className="primary-text">
          Lorem ipsum dolor sit amet, sed do eiusmod dolore magna aliqua.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight/>
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt="" />
        </div>
</div>
    </div>
  )
}
