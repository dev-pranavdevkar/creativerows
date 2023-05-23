import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='bg-dark py-1 text-center '>
                <p className='text-white  text-center'>@2022 The Career360.com - Designed by Creative Crows Technologies.</p>
            </div>

            <div className="">
                <a href="https://api.whatsapp.com/send/?phone=918669225572&amp;text=Hello ! I'm interested&amp;app_absent=1" className="whtsfloat" target="_blank">


                    <img className='whatsapp' src="../images/WhatsApp_icon.png" alt="" />
                </a>
            </div>

            <div className="">
                
                <a href="tel:+918669225572" className="whtsfloat" target="_blank">


                    <img className='call-icon' src="../images/call.png" alt="" />
                </a>
            </div>
        </footer>
    )
}
