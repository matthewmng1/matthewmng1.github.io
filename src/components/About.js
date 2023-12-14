import React from 'react'

import thailandPic from "../assets/thai-elephant.jpg"
import '../css/About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-wrapper'>
          <div className='about-content-header'>
            <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/user.svg' style={{ width: "60px"}}/>
            <p>About Me</p>
          </div>
          <div className='about-container'>
            <div className='about-img'>
              <img src={thailandPic} style={{ width: "300px"}}/>
            </div>
          <div className='about-content'>
            <div className='about-content-text'>
              <p>
                Hello! I'm Matthew and I'm a full-stack software engineer relocating to Parker, Colorado in January 2024. <br/><br/>
                
                I'm interested in building web applications and products that help in streamlining and simplifying every day life and am currently looking for roles in software engineering and data science. My background is primarily in education, working as a classroom teacher since completing my first Master degree in 2017.<br/><br/>

                This past year I enrolled in both the Springboard Software Engineering bootcamp and in the Master of Data Science course at Durham University. I received by Springboard Certificate of Completion in June 2023 and will graduate from Durham University with Distinction in January 2024. I'm excited to enter a new field and am dedicated to continuing to develop my skills. 
              </p>
            </div>
            <div className='about-content-links'>
              <a className='about-link'>github</a>
              <a className='about-link'>linkedin</a>
              <a className='about-link'>resume</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About