import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import home from '../images/home.png'
import logos from '../images/img.jpg'
import about from '../images/info.png'
import img from '../images/contact.png'
import './css/side.scss'
const side = () => {
  
  
  
  return (
    
    <div className='sidebar'>
        <Link  to='/' className='logo'>
        <img src={logos}alt={'events'} width={50} height={30}/>
        <h2>George</h2>
        </Link>
      <nav  className='nav' >
        <NavLink  to="/" >
           <img src={home} alt={'home'} width={40} className='home'/>
        </NavLink>
        <NavLink to='about' >
           <img src={about} alt={'home'} width={40} />
        </NavLink>
              <NavLink to='contact'  >
           <img src={img} alt={'home'} width={40}/>
        </NavLink>
      </nav>
    </div>
  )
}

export default side
