import React from 'react'
import LogoSvg from '../icons/logo2.svg'
import './Header.css'
const Header = () => {
  return (
    <header>
        <div>
            <a href="/"><img src={LogoSvg} alt="" /></a>
        </div>
    </header>
  )
}

export default Header