import React from 'react'
import './ExpCard.css'
import Badges from '../Badges/Badges'
const ExpCard = ({title,company,location,time,duration}) => {
  return (
    <div className='expcard-container'>
      <div className='expcard-1'>
        <div className='title'>{title}</div>
        <Badges text={time} green={true}/>
      </div>
      <div className='expcard-2'>
        <div className='company-container'>
          <div className='company'>{company}</div>
          <div className='location'>{location}</div>
        </div>
        <div className='duration'>{duration}</div>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default ExpCard
