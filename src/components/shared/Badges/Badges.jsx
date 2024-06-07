import React from 'react'
import './Badges.css'
const Badges = ({text,green=false}) => {
  console.log(text,green)
  return (
    <div className={`badges-container ${green?'green':'normal'}`}>
      {text}
    </div>
  )
}

export default Badges
