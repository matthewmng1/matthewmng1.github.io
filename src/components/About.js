import React from 'react'

import thailandPic from "../assets/thai-elephant.jpg"
import aboutMeIcon from "../assets/about-me.png"
import emailIcon from "../assets/email.png"
import githubIcon from "../assets/github.png"
import linkedinIcon from "../assets/linkedin.png"
import resumeIcon from "../assets/resume.png"
import resume from "../assets/Matthew_Ng_Resume_2024.pdf"

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
                Hello! I'm Matthew and I'm a junior full-stack web developer and graduate data scientist located in Parker, Colorado. My  background is primarily in education, having worked as a classroom teacher in New York City since graduating with a Master of Education in 2016. My experience teaching in inner-city schools has cultivated my creativity and problem solving skills in fast-paced environments and I am currently looking for roles in web development where I can further hone my personal and web development skills. <br/><br/>

                In July of 2023, I received my Certification of Completion from the Springboard Software Engineering bootcamp. Shortly after in September 2023 I completed a Master of Data Science from Durham University, graduating with First-Class Honors. I am eager to build upon my new academic foundation and apply my skills to building products that can have real-world applications. <br/><br/>
                
                When I am not working on my coding knowledge, I enjoy exploring the outdoors, travelling to new places, and playing and coaching volleyball. <br/>
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