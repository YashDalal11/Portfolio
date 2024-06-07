import React from 'react'
import './navbar.css'
import {navbar_tab} from '../../data/data'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="name">
        Yash Dalal
      </div>
      <div className="nav">
        <div className="nav-text-container">
            {
            navbar_tab.map((data)=>(
                <div className="nav-text">
                    <a href={data.link}>
                        {data.name}
                    </a>
                </div>
            ))
            }
        </div>
        <div className="download-csv">
            <button className="download-csv-button">Download CSV</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
