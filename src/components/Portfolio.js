import React from 'react'

import projectIcon from "../assets/projects.png"
import expenseIcon from "../assets/expense-tracker.png"
import storeIcon from "../assets/store.png"
import expenseSS from "../assets/expense-screenshot.png"
import wordquakeSS from "../assets/wordquake-screenshot.png"
import '../css/Portfolio.css'

const Portfolio = () => {

  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio-wrapper'> 
        <div className='portfolio-header'>
          <img src={projectIcon} style={{ width: "60px"}}/>
          <p>Projects</p>
        </div>
        <div className='portfolio-container'>
          <div className='portfolio-box'>
            <div className='portfolio-box-content'>
              <a href='https://expense-tracker-b627.onrender.com/admin/overview'><img src={expenseSS} style={{width: "auto", height:"250px"}}/></a>&nbsp;
              <h2>Expense Tracker</h2>
              <p>A simple way to track your spending</p>
            </div>
          </div>
          <div className='portfolio-box'>
            <div className='portfolio-box-content'>
            <a href='https://wordquake-game-client.vercel.app/'><img src={wordquakeSS} style={{width: "auto", height:"250px"}}/></a>&nbsp;
            <h2>WordQuake</h2>
            <p>A Boggle-inspired Word Game</p>
            </div>
          </div>
          <div className='portfolio-box'>
            <div className='portfolio-box-content'>
            <a><img src={storeIcon} style={{width: "auto", height:"250px"}}/></a>&nbsp;
            <h2>Custom Store Front</h2>
            <p>A passion project currently under development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio