import React from 'react'
import { useState, useEffect } from 'react'
import {PacmanLoader} from 'react-spinners'
import './css/contact.scss'
import phone from '../images/call.png'


const Contact = () => {

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
    <div className='contact'>
    <h1 className='fadein'>
      Get In Touch
      <img src={phone} alt={'call'} width={35} className='img'/>
    </h1>

    <p className='fadein'>
       I am seeking oppurtunities where I can apply my skill set to 
       tackle challenging project. I am available to work on projects 
       that solve real world problems.
    </p>

    <div className='flex fadein'>
     <a href='mailto:toshirou2002@gmail.com'> <buttton className="btn">Send Message</buttton></a>
    </div>
  

       <div className='projects'> 
      
         <PacmanLoader color="orange" 
      loading="loading" 
       size={20} aria-label="Loading Spinner"
       data-testid="loader"
      />
       </div>


    </div>
  )
}

export default Contact
