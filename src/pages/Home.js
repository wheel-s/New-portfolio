import React from 'react'
import { useState, useEffect } from 'react'
import {PacmanLoader} from 'react-spinners'
import Animate from '../components/Animate'
import './css/home.scss'

const Home = () => {

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

    
    let [Class, setClass] =useState('letters')
    const name = ["F",'u','l','l','S','t','a','c','k', ' ','d','e','v','e','l','o','p','e','r','.']
    useEffect(()=>{
      setTimeout(() => {
      setClass('letters-hover')
      },4000);
    },[])
  return (
    <div className='center'>
     <header className="header">

      <h1 className='fadein'>
        <span className={Class}> H</span>
        <span className={Class}>i</span>
         <span className={Class}>👋🏼, </span>
       
        <span className={`${Class} _12`}>I'm George</span>
        

      </h1>
       <h1 className='top'> 
        <Animate name={name} idx={15} Class={Class}/>
       </h1>

       <h2 className='sub fadein'>Turning ideas into something useful, one project at a time.  💡</h2>
       <p className='fadein'>
        I'm a very ambitious web developer looking for a role
        in establishment IT company with the opportunity to work
        with the latest technologies on challenging projects
      </p>
      
      </header>

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

export default Home
