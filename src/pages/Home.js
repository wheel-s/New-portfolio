import React from 'react'
import { useState, useEffect } from 'react'
import {PacmanLoader} from 'react-spinners'
import Animate from '../components/Animate'
import './css/home.scss'

const Home = () => {
 
    let name
    let [Class, setClass] =useState('letters')
    name = ["F",'u','l','l','S','t','a', 'c','k', ' ', 'W','e','b',' ','d','e','v','e','l','o','p','e','r']
    useEffect(()=>{
      setTimeout(() => {
      setClass('letters-hover')
      },4000);
    },[])
  return (
    <div className='center'>
     <header className="header">

      <h1>
        <span className={Class}> H</span>
        <span className={Class}>i,</span>
        <br/>
        
        <span className={`${Class} _12`}>I</span>
        <span className={`${Class} _13`}>'m George,</span>

      </h1>
       <h1 className=''> 
     <Animate name={name} idx={15} Class={Class}/>
       </h1>

       <h2 className='sub'>FullStack Developer / Musician</h2>
       <p>
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
