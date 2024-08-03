import React from 'react'
import './Details.css'
import {assets} from '../../asserts/assets'

const Details = () => {
  return (
    <div id='footer'>
      <div className="footer-content">
            <div className="footer-content-left">
    <h2>INFINITY Motors</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vel quasi nam quod quos odio officia autem, aliquam natus laudantium?</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
</div>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>

                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9487091585</li>
                    <li>johnjerishj@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
      
      
    </div>
  
  )
}

export default Details
