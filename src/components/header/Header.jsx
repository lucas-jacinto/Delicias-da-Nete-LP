import React from 'react'
import '../header/header.css'
import logo from '../../assets/logo-nete1.png'

import {BsWhatsapp} from 'react-icons/bs'


const Header = () => {
  return (

  <nav>
    <div className='container nav_container'>

        <a href='#bolos' className='logo'>
          <img src={logo} alt="logo da delicias da nete" />
        </a>

        <ul className='nav_links'>
          <li><a href="#bolos">Bolos</a> </li>
          <li><a href="#bombons">Bombons</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="whastsapp.com.br" className='btn'>Encomendas <BsWhatsapp className='icon'/></a></li>
        </ul>
    </div>
  </nav>
  )
}

export default Header