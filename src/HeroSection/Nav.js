import React from 'react'
import './css/navbar.css'

function Nav() {
    return (
        <nav className='navbar'>
            <div className='nav-content'>
                <span id='logo'>LOGO</span>
                <span className='nav-buttons'>
                    <a href='#'>Rólam</a>
                    <a href='#'>Edzések</a>
                    <a href='#'>Kapcsolat</a>
                </span>
            </div>
            <div className='nav-border'></div>
        </nav>
    )
}

export default Nav
