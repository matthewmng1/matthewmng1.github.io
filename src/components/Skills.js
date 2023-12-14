import React from 'react'

import '../css/Skills.css'

const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <div className='skills-wrapper'>
        <div className='skills-header'>
          <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/atom.svg' style={{ width: "60px"}}/>
          <p>Skills</p>
        </div>
        <div className='skills-container'>
          <table className='skills-table'>
              <tr className='skills-table-row'>
                <td className='skills-table-header'>
                  <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/laptop.svg' style={{ width: "20px"}}/>&nbsp;
                  <p>TECHNICAL SKILLS</p>
                </td>
                <td className='skills-table-content'>
                  <td>
                    <b>Languages & Frameworks</b><br/>
                    JavaScript, ReactJS, NodeJS, ExpressJS
                  </td><br/>
                  <td>
                    <b>Databases</b><br/>
                    MongoDB, PostgreSQL, MySQL
                  </td>
                </td>
              </tr>
              <tr>
                <td className='skills-table-header'>
                  <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/users-alt.svg' style={{ width: "20px"}}/>&nbsp;
                  <p>ESSENTIAL SKILLS</p>
                </td>
                <td className='skills-table-content'>
                  <td>
                    <b>Leadership</b><br/>
                    Dolor pariatur eu ex dolore excepteur labore sint deserunt aliquip sit officia pariatur irure ullamco.
                  </td><br/>
                  <td>
                    <b>Communication</b><br/>
                    Dolor pariatur eu ex dolore excepteur labore sint deserunt aliquip sit officia pariatur irure ullamco.
                  </td>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Skills