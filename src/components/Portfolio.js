import React from 'react'

import '../css/Portfolio.css'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio-wrapper'> 
        <div className='portfolio-header'>
          <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/folder-open.svg' style={{ width: "60px"}}/>
          <p>Projects</p>
        </div>
        <div className='portfolio-container'>
          <table className='portfolio-table'>
            <tr className='portfolio-table-row'>
              <td className='portfolio-table-header'>
                <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/book.svg'style={{ width: "20px"}}/>&nbsp;
                <p>EXPENSE TRACKER</p>
                </td>
              <td className='portfolio-table-content'>Magna dolore sit id tempor. Fugiat sint aliqua elit ipsum nostrud et do esse cillum et ipsum. Laborum laboris consectetur quis esse eu esse sint nisi ex. Eiusmod in nulla mollit amet duis adipisicing ut id. Qui qui mollit magna eu mollit consectetur reprehenderit eiusmod non reprehenderit. Ex eiusmod consectetur proident incididunt irure fugiat.</td>
            </tr>
            <tr className='portfolio-table-row'>
              <td className='portfolio-table-header'>
                <img src='https://unicons.iconscout.com/release/v4.0.8/svg/line/store.svg'style={{ width: "20px"}}/>&nbsp;
                <p>STORE FRONT</p>
              </td>
              <td className='portfolio-table-content'>Laborum deserunt incididunt nostrud cupidatat do labore laborum irure labore. Pariatur occaecat ex id voluptate nulla. Esse tempor dolor exercitation do aliqua nostrud quis. Non proident et sunt aliquip. Lorem ut eu pariatur in non aute. Cupidatat enim duis eiusmod dolor consectetur labore.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Portfolio