import React, { useState } from 'react'
import "./Header.css"
import logo from "../assets/imgs/logo.png"
import { Link } from 'react-router-dom';

function Header() {
  let [menu,setMenu]=useState("home");
  // console.log(menu);
  return (
    <div className='header' id='header'>
      <div className="header-logo">
        <img src={logo} alt="" />
        <h1>DLN SPACE HEALTHCARE</h1>
      </div >

      <ul className={`nav-links`}>
        <li> <Link to="/" onClick={()=>{setMenu("home")}}>HOME</Link> {menu==="home"?<hr />:<></>}</li>
        <li> <Link to="/products" onClick={()=>{setMenu("products")}}>PRODUCTS</Link>{menu==="products"?<hr />:<></>} </li>
        <li> <a href="#footer">CONTACT US</a> </li>
      </ul>
    </div>
  );
}

export default Header