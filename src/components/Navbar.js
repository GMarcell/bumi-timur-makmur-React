import React, { useRef } from 'react'
import '../styles/Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'
import Logo from '../assets/icons/logo.png'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <img className='logo' src={Logo} alt='Logo'/>
            <nav ref={navRef}>
                <a href='/'>Home</a>
                <a href='/about-us'>About Us</a>
                <a href='/product'>Product</a>
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