import React from 'react'

export default function Contact() {
  return (
    <div className='contact-page-wrapper'>
      <h1 className='primary-heading'>
        Have Question in mind? 
      </h1>
      <h1 className='primary-heading'>
      Let us help you
      </h1>
      <div className="contact-form-container">
        <input type="text" placeholder='yourmailid@gmail.com'/>
        <button className='secondary-button'>
            Submit
        </button>
      </div>
    </div>
  )
}
