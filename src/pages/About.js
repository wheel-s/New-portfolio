import React from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {PacmanLoader} from 'react-spinners'
import Animate from '../components/Animate'
import './css/about.scss'

const About = () => {
      let [Class, setClass] =useState('letters')
      useEffect(()=>{
        setTimeout(() => {
        setClass('letters-hover')
        },3000);
      },[])
   
  return (
    <>
    <div className='centers'>
      <h1 className='cent'>
        <Animate name={['A','b','o','u','t',' ','M','e']} idx={15} Class={Class}/>
      
      </h1>
      
      <p>
        my goal is to invest in work seeking self-development,
        and improvement, make impact by solving problems as a software
        developer

      </p>
      <div  className='centq' >
       <h1>Skills</h1>
      <ul>
        <div className='flex'>
          <li>Html5, CSS3, TailwindCSS, SCSS(Sass)</li>
           <li>JavaScript(ES6+), TypeScript</li>
        </div>
       <div className='flex'>
          <li>React.js, Vue.js, Angular</li>
          <li>Node.js, Express.js, Fast-api</li>
            <li>Java, Python, Sprngboot</li>
       </div>
        <div className='flex'>
         
           <li>momgoDB, my-SQL, PostgreSQL, Firebase, Supabase</li>
           <li>Git, GitHub, Docker, CI/CD Pipelines</li>
        </div>
        <div className='flex'>
           <li>AWS, Azure, Hostinger</li> 
           <li>Troubleshooting and debugging</li> 
          <li>Up-to-date practices</li>
        </div>

       
      </ul>
      </div>
      <div className='projects'>  
     <PacmanLoader color="orange" 
     loading="loading" 
      size={20} aria-label="Loading Spinner"
      data-testid="loader"/>
      </div>

 <h1>Projects</h1>
      <div className='project'>
       
        <div className='square'>
          <h2>Pintrest Clone</h2>
          <p>A fullstack web app copying pintrest's
            core functionality
          </p>
          <span>
            
            React.Js,CSS3,
            Node.Js,MongoDB

          </span>
         <Link to='https://wheel-s/verizon'>Live Demo</Link>
        </div>
        <div className='square '>
          <h2>E-Commerce</h2>
          <p>A responsive -commerce platform 
            with user authentication and role-based access
          </p>
          <span>
            Springboot,MySQL,TypeScript,
            React.Js,
            TailwindCSS,SCSS....
          </span>
          <Link>Live Demo</Link>
        </div>
        <div className='square'>
        <h2>Edge-Plan</h2>
        <p>An AI-Powered Event Planner having several features</p>
        <span>
          FastApi,PostgreSQL,Typescript,
          React.Js,TailwindCSS,SCSS...
        </span>
        <Link>Live Demo</Link>
        </div>
      </div>
    </div>
  
    </>
   
  )
}

export default About
