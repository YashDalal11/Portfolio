import React from 'react'
import './AboutMe.css'
import Badges from '../shared/Badges/Badges'
import ExpCard from '../shared/ExpCard/ExpCard'
import {experiences,education} from '../../data/data'
const AboutMe = () => {
  return (
    <div className='aboutme-container' id="aboutMe">
      <Badges text="About Me"/>
      <div className='aboutme-text'>
        Here is a quick summary about me and my experiences:
      </div>
      <div className='exp-edu-container'>
        <div className='experience-container'>
            <div className='heading'>
                Work Experience
            </div>
            <div>
                {experiences.map(data=>(
                    <ExpCard 
                    title={data.position}
                    company={data.company}
                    location={data.location}
                    time={data.time}
                    duration={data.duration}
                />
                ))}
            </div>
        </div>
        <div className='education-container'>
            <div className='heading'>
                Education
            </div>
            <div>
                {education.map(data=>(
                    <ExpCard 
                    title={data.branch}
                    company={data.college}
                    location={data.location}
                    time={data.time}
                    duration={data.duration}
                />
                ))}
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe
