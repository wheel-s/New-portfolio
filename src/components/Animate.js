import React from 'react'
import './css/animate.scss'

const Animate = ({name, Class, idx}) => {
  return (
    <div>
      {  
          name.map((item, i)=>{
          return(
            <span key={item + i} className={`${Class} _${i + idx}`} >
              {item}
            </span>
          )
          })
      }
    </div>
  )
}

export default Animate
