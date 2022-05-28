import React, { useRef } from 'react'
import '../styles/Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'
import Logo1 from '../assets/icons/logo1.png'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <img className='logo' src={Logo1} alt='Logo'/>
            <nav ref={navRef}>
                <a href='/'>Home</a>
                <a href='/about-us'>About Us</a>
                <a href='/product'>Product</a>
                <a href='/teams'>Our Teams</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}

export default Navbar