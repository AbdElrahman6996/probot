import React from 'react'
import LogoSvg from '../icons/logo2.svg'
import CommandIcon from '../icons/commandIcon.svg'
import SupportIcon from '../icons/questionmark.svg'
import UsFlag from '../icons/us.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div>
            <a href="/"><img src={LogoSvg} alt="" /></a>
        </div>
        <nav className='app-navbar'>
            <a href="/"><img src={CommandIcon} alt="commands-icon" />Commands</a>
            <a href="/"><img src={SupportIcon} alt="support-icon" />Supportr</a>
            <a href="/"><img src={UsFlag} alt="language-icon" /></a>
        </nav>
    </header>
  )
}

export default Header