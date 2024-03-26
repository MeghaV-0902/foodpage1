import React from 'react'
import Pickmeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

export default function Work() {
    const workInfoData = [
    {
        image : Pickmeals,
        title : "Pickmeals",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        image : ChooseMeals,
        title : "ChooseMeals",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    },
    {
        image : DeliveryMeals,
        title : "DeliveryMeals",
        text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    }
]
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it works</h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="work-section-bottom">
           {
            workInfoData.map((data)=>(
                <div className='work-section-info' key={data.title}>
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            ))
           }
        </div>
      
    </div>
  )
}
