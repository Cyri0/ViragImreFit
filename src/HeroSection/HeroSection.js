import React from 'react'
import Nav from './Nav'
import Social from './Socialmedia'
import Services from './Services'

import './css/herosection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <Nav />
            <div className="hero-inside-container">
                <Title />
                <Social/>
            </div>
            <Services />
        </div>
    )
}

function Title(){
    return (
        <div>
            <h1>Virág Imre</h1>
            <h2>sport és egészség</h2>
        </div>
    )
}

export default HeroSection