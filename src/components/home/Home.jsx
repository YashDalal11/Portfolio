import React from 'react'
import './Home.css'
import {home_description,location,availability,x_account_link} from '../../data/data'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../../assets/profile.jpg'
const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className='home-left'>
        <div className="name-text-container">
          <div className='name-text'>
            Hi,<br/> I'm <span>Yash Dalal</span>
          </div>
          <div className='description'>
            {home_description}
          </div>
          <div className='location-container'>
            <div className='location'>
              <div className="location-logo">
                <LocationOnIcon/>
              </div>
              <div className="location-text">
                {location}
              </div>   
            </div>
            <div className='availability'>
              <div className="availability-logo">
                <FiberManualRecordIcon/>
              </div>
              <div className="availability-text">
                {availability}
              </div>
            </div>
             
          </div>
          <div className='social-media'>
            <a className='social-media-logo' href='#'><XIcon/></a>
            <a className='social-media-logo' href='#'><GitHubIcon/></a>
            <a className='social-media-logo linkedin' href='#'><LinkedInIcon/></a>
          </div>
        </div>
      </div>
      <div className='home-right'>
        <div className='profile-container'>
          <img src={profile} alt='profile'/>
        </div>
      </div>
    </div>
  )
}

export default Home
