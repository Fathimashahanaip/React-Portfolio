import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user from '../../assets/user-icon.jpg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" width={200} height={90} />
                <p>I am a frondend Developer from, INDIA </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" height={50} width={50} />
                    <input type='email'placeholder='Enter your email'></input>
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <div className="footer-bottom-left">
            <p >© 2025 Fathima Shahana IP. All rights reserved</p>
                
            </div>
           
                <div className="footer-bottom-right">
                    <p> Term of services</p>
                    <p> Privacy Policy</p>
                    <p> Connect with Me</p>
                </div>
        
        </div>


    </div>
  )
}

export default Footer