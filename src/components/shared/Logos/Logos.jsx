import React from 'react'
import './Logos.css'
const logos = ({data}) => {
  return (
    <div className="logo-container">
      <img src={data.src} alt={data.name} className="logo-img"/>
    </div>
  )
}

export default logos
