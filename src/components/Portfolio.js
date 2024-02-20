import React from 'react'

import projectIcon from "../assets/projects.png"
import expenseIcon from "../assets/expense-tracker.png"
import storeIcon from "../assets/store.png"
import expenseSS from "../assets/expense-screenshot.png"
import wordquakeSS from "../assets/wordquake-screenshot.png"
import '../css/Portfolio.css'
import { Link } from 'react-router-dom'

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
              <span style={{display: "inline-block"}}>
                <h3 style={{display: "inline"}}>Rugby Dashboard</h3>
                <small><a href="https://github.com/matthewmng1/rugby-dashboard"> Repo</a></small>
              </span>
              <div><small><i>Project built in collaboration with the Newcastle Falcons Professional Rugby Union Club for the degree of Master of Data Science at Durham University.</i></small></div>
              <hr></hr>
              <li>A web application displaying rugby matches, players, statistics and performance scores using data processed from OvalInsights CSVs in R-Studio using PCA, ANOVA and randomForest models.</li>
              <li>Dashboard build on React, Python, Flask, and PostgreSql.</li>
            </div>
          </div>
          <br></br>
          <div className='portfolio-box'>
            <div className='portfolio-box-content'>
              <span style={{display: "inline-block"}}>
                <h3 style={{display: "inline"}}>Expense Tracker </h3>
                <small>
                  <a href='https://expense-tracker-b627.onrender.com/admin/overview'> Demo </a> | 
                  <a href="https://github.com/matthewmng1/expense-tracker"> Repo</a></small>
              </span>
              <hr></hr>
              <li>A simple web application where users can create an account, log and view expenses, and customize spending categories and payment methods</li>
              <li>Developed using React, JavaScript, Nodejs, Expressjs and MongoDB.</li>
            </div>
          </div>
          <br></br>
          <div className='portfolio-box'>
            <div className='portfolio-box-content'>
              <span style={{display: "inline-block"}}>
                <h3 style={{display: "inline"}}>WordQuake</h3>
                <small>
                  <a href='https://wordquake-game-client.vercel.app/'> Demo </a> | 
                  <a href="https://github.com/matthewmng1/wordquake-game"> Repo</a></small>
              </span>
              <div><small><i>A Springboard Bootcamp project.</i></small></div>
              <hr></hr>
              <li>A Boggle-inspired word game. Users search for words on a 5x5 to earn points based on word length.</li>
              <li>Built using React, JavaScript, Nodejs and Expressjs.</li>
            </div>
          </div>
          <br></br>
          <div className='portfolio-box'>
            <div className='portfolio-box-content'>
            <span style={{display: "inline-block"}}>
                <h3 style={{display: "inline"}}>SteamNews</h3>
                <small><a href="https://github.com/matthewmng1/Capstone2-Steam"> Repo</a></small>
              </span>
              <div><small><i>A Springboard Bootcamp project.</i></small></div>
            <hr></hr>
            <li>Users create accounts, search for news related to games on Steam and save games to their dashboards. </li>
            <li>Built using React, JavaScript, Nodejs, Expressjs, and PostgreSql. </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio