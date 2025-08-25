import React from 'react'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import home from '../images/home-button.png'
import logos from '../images/toshiro.jpg'
import about from '../images/id-card.png'
import img from '../images/contacts.png'
import link from '../images/social.png'
import github from '../images/github.png'

import './css/side.scss'
const Side = () => {
  
  useEffect(()=>{
    const fadeElement = document.querySelectorAll('.fadein')
    const observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },{
      threshold:0.2
    })
    fadeElement.forEach(element =>{
      observer.observe(element)
    })
    return()=>observer.disconnect()
  },[])

  
  
  return (
    
    <div className='sidebar'> 
        <Link  to='/' className='logo fadein'>
        <img src={logos}alt={'events'} width={50} height={30}/>
        <h2>George</h2>
        </Link>
      <nav  className='nav fadein' >
        <NavLink  to="/" >
           <img src={home} alt={'home'} width={36} className='home'/>
        </NavLink>
        <NavLink to='about'>
           <img src={about} alt={'home'} width={40} />
        </NavLink>
              <NavLink to='contact'>
           <img src={img} alt={'home'} width={40}/>
        </NavLink>
      </nav>
         <nav  className='nav fadein' >
        <NavLink  to="https://github.com/wheel-s" target='blank'>
           <img src={github} alt={'home'} width={36} className='home'/>
        </NavLink>
        <NavLink to='https://linkedin.com/in/george-🦅-0b5b062b3' target='blank'>
           <img src={link} alt={'home'} width={40} />
        </NavLink>
    
      </nav>
    </div>
  )
}

export default Side
