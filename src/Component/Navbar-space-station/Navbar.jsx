import React from 'react'
import "./Navbar.css"
import Logo from "../../assets/assets/shared/logo.svg";
import hamburgerMenu from "../../assets/assets/shared/icon-hamburger.svg"
import crossIcon from "../../assets/assets/shared/icon-close.svg"
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
  const[showNabar,setShowNavbar] = useState(false);
  const isShowNavbar = ()=>{
     setShowNavbar(!showNabar);
  }
  return (
    <header>
        <nav>
            <img src={Logo} alt="Navbar-logo" loading='lazy' />
            <ul className={`${showNabar ? "show" : ""}`}>
                <li><Link to="/"  className='Link'><span className='first-page'>00</span> Home</Link></li>
                <li><Link to="/destination/:planet" className='Link'><span className='second-page'>01</span> DESTINATION</Link></li>
                <li><Link to="/Crew" className='Link'><span className='third-page'>02</span>CREW</Link></li>
                <li><Link to="/Technology" className="Link"><span className='fourth-page'>03</span> TECHNOLOGY</Link></li>
            </ul>
        </nav>
        <img className='menu-icons' src={showNabar ? crossIcon : hamburgerMenu} alt="menu icon" onClick={isShowNavbar} loading="lazy"/>
    </header>
  )
}

export default Navbar
