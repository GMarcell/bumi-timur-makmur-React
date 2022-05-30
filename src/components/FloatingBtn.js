import React from 'react'
import '../styles/FloatingBtn.css'
import { FaWhatsapp } from 'react-icons/fa'

function FloatingBtn() {
    return (
        <div className='floating-wa-btn'>
            <a href='https://wa.me/6285157776759'>
                <FaWhatsapp size={48}/>
            </a>
        </div>
    )
}

export default FloatingBtn