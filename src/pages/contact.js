import React from 'react'
import { useState, useEffect } from 'react'
import {PacmanLoader} from 'react-spinners'
import Animate from '../components/Animate'
import './css/contact.scss'
import phone from '../images/contact.png'
import email from '../images/info.png'
const Contact = () => {
     let [Class, setClass] =useState('letters')
         useEffect(()=>{
        setTimeout(() => {
        setClass('letters-hover')
        },3000);
      },[])
  return (
    <div className='contact'>
    <h1>
    <Animate name={['C','o','n','t','a','c','t',' ','M','e']} idx={15} Class={Class}/>
    </h1>

    <p>
      I'm intrested in freelance oppurtunities - especially
      ambitious or large projects. However, ifyou have any other
      request or question, dont hesistate to contact me.
    </p>
    <div className='flex'>
    <img src={phone} alt={'phone'} width={20} height={20}/>
    <p>Phone: +2347066926765</p>
    </div>
    <div className='flex'>
<img src={email} alt={'phone'} width={20} height={20}/>
       <p>Email: toshirou2002@gmail.com</p>
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
