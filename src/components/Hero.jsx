import React from 'react'
import DiscordLogo from '../icons/discordicon.svg'
import './Hero.css'
const Hero = () => {
  return (
    <main>
        <div className="txt-container">
            <h1>Make A Professional Discord Server!</h1>
        </div>
        <div className="main-btn-container">
            <a href="/" className='add-to-discord-btn'><img src={DiscordLogo} alt="" />Add To Discord</a>
            <a href="/" className='hero-login-btn'>Login</a>
        </div>
    </main>
  )
}

export default Hero