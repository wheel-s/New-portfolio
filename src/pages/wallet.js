import React from 'react'
import { useState,useEffect } from 'react'

const Wallet = () => {

    const[wallet, setWallet] = useState([])

    useEffect(()=>{
          fetch('http://localhost:5000/api/info', {
        })
        .then(res=>{
          if(!res.ok){
            console.log(res.json())
          }
          return res.json()})
        .then(data=>{console.log(data)})
        .catch(error => console.log(error))
    },[])
  return (
    <div className='wal'>
      <p>Hello</p>
     {wallet.map((item)=>{return( <p>{item}</p>)})}
    </div>
  )
}

export default Wallet
