import React from 'react'
import ContactForm from './contactForm'
import BannerSlider from './BannerSlider'

export default function BannerForm() {
  return (
    <div>
        
        <div className='row bannerFormdiv '>
            <div className='col-lg-8 p-0'>
              <BannerSlider />
            </div>
            <div className='col-lg-4 p-0 bg-dark'>
             
                <ContactForm />
            </div>
        </div>
    </div>
  )
}
