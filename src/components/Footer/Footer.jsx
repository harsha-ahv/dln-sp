import React from 'react'
import logo from "../assets/imgs/logo.png"
import { Link } from 'react-router-dom'
import { IoMdCall,IoMdMail } from "react-icons/io";  
import "./Footer.css"

function Footer() {
  return (
    <div className='footer' id='footer'>
      <h1>CONTACT US</h1>
      <div className="footer-top">
        <div className="footer-left">
        <form>      
          <input name="name" type="text" className="feedback-input" placeholder="Name" />   
          <input name="email" type="text" className="feedback-input" placeholder="Email" />
          <input name="mobile" type="text" className="feedback-input" placeholder="Mobile" />
          <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
          <input type="submit" value="SUBMIT"/>
        </form>
        </div>
        <div className="footer-right">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.3423037890916!2d78.38371817506255!3d17.5388820833744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e0ab28e0975%3A0x7b048b2858fdee94!2sVallurupalli%20Nageswara%20Rao%20Vignana%20Jyothi%20Institute%20of%20Engineering%20%26Technology!5e0!3m2!1sen!2sin!4v1716805216852!5m2!1sen!2sin" width="600" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="contact">
        
        <IoMdCall /> 123457980
        <IoMdMail /> demo.mail@mail.com 
        </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>DLN SPACE HEALTHCARE</p> 
        </div>
        <div className="footer-links">
        <li> <Link to="/">HOME</Link></li>
        <li> <Link to="/products" >PRODUCTS</Link></li>
        <li> <a href="#footer">CONTACT US</a> </li>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer