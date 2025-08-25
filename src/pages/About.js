import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {PacmanLoader} from 'react-spinners'
import link from '../images/link.png'
import info from '../images/about.png'
import './css/about.scss'

const About = () => {

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
    <>
    <div className='centers'>
      <h1 className='cent'>
        About 🦅
      
      </h1>
      
      <p className='fadein about'>
        I'm George, a fullStack developer, with a strong background in designing and developing.
        my goal is to invest in work seeking self-development,
        and improvement, make impact by solving problems as a software
        developer.

      </p>
      <div>

      </div>
      <section className='fadein todo'>
        <h2> <img src={info} alt={'call'} width={31} className='img'/>What I do:</h2>
        <p>
          <span>Front-end development: </span>Build responsive, modern user interfaces,
          with React and TypeScript.
        </p>
        <p>
          <span>Back-end development: </span>Design and implement REST Apis and
          data driven applications using python(Django, Flask and Fast-Api), Node.js, Express.js, Java(SpringBoot).
        </p>
        <p>
          <span>Databae Management: </span>Create and maintain data schemas with SQL(PostgreSQL)
           and NoSQL(MongoDb) databases.
        </p>
        <p>
          <span>Devops & Deployment: </span>Manage application deployment, 
          server configuration, and cloud services(Git, Docker, AWS, Hostinger).
        </p>

      </section>
     
      <div className='projects'>  
     <PacmanLoader color="orange" 
     loading="loading" 
      size={20} aria-label="Loading Spinner"
      data-testid="loader"/>
      </div>

    <h1 className='fadein'> Selected Projects</h1>

      <div className='project'>
         
        <div className='square fadein'>
          <h2 className='h1'>Pintrest Clone</h2>
          <p>A fullstack web app copying pintrest's
            core functionality
          </p>
          <span>
            React.Js, CSS3,
             Node.Js, MongoDB
          </span>
         <Link to='https://github.com/wheel-s/verizon'target='blank' className='a2'><img src={link} alt={'link'} width={25} className='img'/>View Github</Link>
        </div>
        <div className='square fadein '>
          <h2 className='h2'>E-Commerce</h2>
          <p>A responsive -commerce platform 
            with user authentication and role-based access
          </p>
          <span>
            Springboot, MySQL, TypeScript,
            React.Js, TailwindCSS, SCSS....
          </span>
          <Link to='https://github.com/wheel-s/shopify' target='blank' className='a2'><img src={link} alt={'link'} width={25} className='img'/>View Github</Link>
        </div>

        <div className='square fadein'>
        <h2 className='h3'>task-manager</h2>
        <p>An AI-Powered task-manager that helps users achieve some-what long term goals</p>
        <span>
          FastApi, PostgreSQL, Typescript,
          React.Js, TailwindCSS, SCSS...
        </span>
        <Link to='https://github.com/wheel-s/task-manager' target='blank' className='a2'><img src={link} alt={'link'} width={25} className='img'/>View Github</Link>
        </div>
      
      </div>
    </div>
  
    </>
   
  )
}

export default About
