import React from 'react'

import skillsIcon from "../assets/skills.png"
import technicalIcon from "../assets/technical.png"
import javascriptIcon from "../assets/javascript.png"
import reactIcon from "../assets/react.png"
import postgresIcon from "../assets/postgresql.png"
import mySqlIcon from "../assets/mysql.png"
import pythonIcon from "../assets/python.png"
import nodejsIcon from "../assets/nodejs.png"
import expressIcon from "../assets/express.png"
import mongoIcon from "../assets/mongodb.png"
import cssIcon from "../assets/css.png"
import flaskIcon from "../assets/flask.png"
import htmlIcon from "../assets/html.png"
import rIcon from "../assets/r.png"
import tailwindIcon from "../assets/tailwind-css.png"
import reduxIcon from "../assets/redux.png"

import '../css/Skills.css'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='skills-wrapper'>
        <div className='skills-header'>
          <img src={skillsIcon} style={{ width: "60px"}}/>
          <p>Skills</p>
        </div>
        <div className='skills-container'>
          <table className='skills-table'>
              <tr className='skills-table-row'>
                <td className='skills-table-header'>
                  <img src={technicalIcon} style={{width: "auto", height:"30px"}}/>&nbsp;
                  <p>TECHNICAL SKILLS</p>
                </td>
                <td className='skills-table-content'>
                  <td>
                    <div style={{display: "flex", alignItems:"center"}}><img src={reactIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>ReactJS</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={javascriptIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>JavaScript</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={pythonIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>Python</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={htmlIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>HTML</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={cssIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>CSS</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={nodejsIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>NodeJS </div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={expressIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>ExpressJS</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={flaskIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>Flask</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={mongoIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>MongoDB </div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={mySqlIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>MySQL</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={postgresIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>PostgreSQL</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={tailwindIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>TailwindCSS</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={reduxIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>Redux</div>
                    <div style={{display: "flex", alignItems:"center"}}><img src={rIcon} style={{width: "auto", height:"20px", marginRight:"2%", marginLeft:"2%"}}/>R Studio</div>

                  </td><br/>
                  {/* <td>
                    <b>Databases</b><br/>
                    
                  </td> */}
                </td>
              </tr>
              {/* <tr>
                <td className='skills-table-header'>
                  <img src={essentialIcon} style={{width: "auto", height:"30px"}}/>&nbsp;
                  <p>ESSENTIAL SKILLS</p>
                </td>
                <td className='skills-table-content'>
                  <td>
                    <b>Leadership</b><br/>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>Lead Classroom Teacher</div>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>One-on-one coach of fellow co-teacher</div>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>Grade Team Leader to a team of seven</div>
                  </td><br/>
                  <td>
                    <b>Communication</b><br/>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>Collaborate with technology ambassadors across the KIPP NYC network</div>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>Collaborate with teaching colleagues</div>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>Give and receive feedback during weekly meetings</div>
                      <div style={{display: "flex", alignItems:"center"}}><img src={subArrowIcon} style={{width: "auto", height:"20px", marginRight:"2%"}}/>Stay in communication with students' families</div>
                      
                  </td>
                </td>
              </tr> */}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Skills