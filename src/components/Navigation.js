import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import squarePic from '../assets/nav-pic.png'
import resume from "../assets/Matthew_Ng_Resume_2024.pdf"

import '../css/Navigation.css'

const Navigation = () => {
  return (
    <div className='nav-wrapper'>
      <div className='nav-left'>
        <div className='nav-left-content'>
          <div className="nav-left-img">
            <img src={squarePic} style={{width: "150px", borderRadius: "1000px"}}/>
          </div>
          
          <nav className='nav-links'>
            <ScrollLink
                className="nav-link"
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                duration={500}
              >
                home
              </ScrollLink>

              <ScrollLink
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                about
              </ScrollLink>

              <ScrollLink
                className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
              >
                skills
              </ScrollLink>

              <ScrollLink
                className="nav-link"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
              >
                portfolio
              </ScrollLink>

              <a 
                className="nav-link"
                href={resume}
              >
                resume
              </a>
          </nav>
        </div>
        
      </div>
    </div>
  )
}

export default Navigation