import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, ratione harum libero autem voluptatum laboriosam deleniti deserunt fugiat voluptate, blanditiis fuga expedita itaque, odio iusto hic. Praesentium in quibusdam accusamus.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>9168033201</li>
                <li>atharvgavali0074@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright"><h2>Designed by Atharv Gavali.</h2></p>
    </div>
  )
}

export default Footer
