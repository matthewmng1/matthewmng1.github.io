import React from 'react'

import thailandPic from "../assets/thai-elephant.jpg"
import aboutMeIcon from "../assets/about-me.png"
import emailIcon from "../assets/email.png"
import githubIcon from "../assets/github.png"
import linkedinIcon from "../assets/linkedin.png"
import resumeIcon from "../assets/resume.png"
import resume from "../assets/Matthew_Ng_SWDS_Resume.pdf"

import '../css/About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-wrapper'>
          <div className='about-content-header'>
            <img src={aboutMeIcon} style={{ width: "60px"}}/>
            <p>About Me</p>
          </div>
          <div className='about-container'>
            <div className='about-img'>
              <img src={thailandPic} style={{ width: "300px"}}/>
            </div>
          <div className='about-content'>
            <div className='about-content-text'>
              <p>
                Hello! I’m Matthew and I’m a full-stack web developer and data scientist located in Parker, Colorado. In the past year, I’ve completed a remote software engineering bootcamp at Springboard while simultaneously enrolled in a Master of Data Science program at Durham University. I completed the Springboard bootcamp in July 2023 and graduated from Durham University with a 4.0 cumulative GPA and First-Class Honors in September 2023. I’m currently seeking roles in web development and data analytics where I can continue to grow my skills in these fields. <br/><br/>

                Prior to transitioning into technology, I worked as a full-time classroom teacher in New York City after completing a Master of Education program at Durham University in 2016. During this period, I helped to graduate founding classes at two different schools, managed and led teams of educators with up to 12 years of classroom experience, and collaborated on the regional level in curriculum development and classroom technology. Teaching in inner-city schools has cultivated my creativity and problem-solving skills and I’m eager to apply these skills to a new role in web development or data analytics.  <br/><br/>
                  
                Outside of education and technology, I enjoy playing and coaching volleyball, exploring the outdoors, travelling to new places, learning new recipes and trying new restaurants.  <br/>
              </p>
            </div>

            <a className='about-emailMe' href='mailto:matthewmng1@gmail.com' style={{display:"flex", alignItems:"center"}}>
              <img src={emailIcon} style={{ width:"auto", height: "40px", marginRight:"5%" }} />
              matthewmng1@gmail.com
            </a>

            <div className='about-content-links'>
              <a className='about-link' href='https://github.com/matthewmng1'>
                <img src={githubIcon} style={{ width:"auto", height: "20px", marginRight:"10%" }} />
                github
              </a>
              <a className='about-link' href='https://www.linkedin.com/in/matthewmng1'>
                <img src={linkedinIcon} style={{ width:"auto", height: "20px", marginRight:"10%"  }} />
                linkedin
              </a>
              <a className='about-link' href={resume}>
                <img src={resumeIcon} style={{ width:"auto", height: "20px", marginRight:"10%"  }} />
                resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About