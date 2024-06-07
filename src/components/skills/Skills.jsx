import React from 'react'
import './Skills.css'
import Badges from '../shared/Badges/Badges'
import {tech_stack} from '../../data/data'

const Skills = () => {
  return (
    <div className='skill-container' id='techstack'>
      <Badges text="Skills"/>
      <div className='skills-text'>
        The skills, tools and technologies I am really good at:
      </div>
      <div className="logos-container">
        {tech_stack.map(data=>{
            return(
                <div className='logo-container'>
                    <img src={data.src} alt={data.name} className='logo-img'/>
                </div>
            )
        }
        )}
      </div>
    </div>
  )
}

export default Skills
