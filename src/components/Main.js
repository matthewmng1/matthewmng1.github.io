import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link as ScrollLink } from 'react-scroll';
import videoBg from "../assets/videoBg.mp4"
import downArrow from "../assets/downArrow.png"

import '../css/Main.css'


const Main = () => {
  return (
    <div className='main' id='main'>
      <div className='main-overlay'>
      <video src={videoBg} autoPlay loop muted/>
        <div className='main-content'>
          <div className='main-content-text'>
            <TypeAnimation
              sequence={[
                "Hi, I'm Matthew.", 1000,
                "I am a full-stack developer and data scientist from New York City.", 1500,
                "You can reach me at matthewmng1@gmail.com", 2000,
                "Thanks for visiting!", 1000,
                "",
              ]}
              speed={50}
              style={{ whiteSpace: 'pre-line',fontSize: '1em'}}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className='main-arrow-btn'>
          <ScrollLink
            className="nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
          <img src={downArrow} style={{ width: "50px"}}/>
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Main;