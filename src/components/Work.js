import React from 'react';
import Project from './Project.js';
import taskmngmt from '../assets/taskmngmt.gif'
import portfolio from '../assets/portfolio.gif'
import inventoryProj from '../assets/invmng.gif'
import newsagg from '../assets/newsagg.gif'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

function Work () {
  return (
    <section className='section' id='work' >
      <div className='flex-1 container mx-auto mb-8 mt-10'>
        <motion.h2 
          className='h2 p-2 font-primary text-[#1a1818]'
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:true}}
        >
          Projects
        </motion.h2>
        <motion.hr 
          className='text-black w-[90%] h-[2px] m-6 bg-black flex justify-center'
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:true}}
        ></motion.hr>
          <Project 
            img={newsagg}
            title='Forecast-News Aggregator'
            description='A full-stack application that aims to provide users with an interface to view weather data, air quality data, and news articles based on the city and state they input.  '
            tag1="React"
            tag2="Node.JS"
            tag3="Express.js"
            tag4="RESTful API"
            tag5="AWS DynamoDB"
            tag6="Vercel/Heroku"
            tag7="OpenAI, OpenMeteo, Twilio, News API"
            projectUrl="https://weather-app-six-phi-69.vercel.app/"
            githubUrl="https://github.com/IamJesseP/Forecast-News-Aggregator"
          />
          <Project 
            img={taskmngmt}
            title='Tech Incubator'
            description='A fullstack task management application written with React, Nodejs, and Firebase. '
            tag1="React"
            tag2="Node.JS"
            tag3="Express.js"
            tag4="RESTful API"
            tag5="Firebase"
            tag6="Vercel/Heroku"
           
            projectUrl="https://task-management-app-nine-beryl.vercel.app/"
            githubUrl="https://github.com/IamJesseP/Task-Management-App"
          />
        <Project 
          img={inventoryProj}
          title='Inventory Management System'
          description="A Windows Forms(.NET Framework) inventory management application written in C#."
          tag1="C#"
          tag2=".NET Framework"
          tag3="Windows Forms"
          tag4="Git"
          projectUrl="https://github.com/IamJesseP/InventoryManagementSystem"
          githubUrl="https://github.com/IamJesseP/InventoryManagementSystem"
        />
        <Project 
          img={portfolio}
          title='Personal Portfolio'
          description="You're already here! A single page app to learn a little bit more about me, my skills, and personal projects"
          tag1="React"
          tag2="Tailwind CSS"
          tag3="Vercel"
          projectUrl="https://www.jesseperez.dev"
          githubUrl="https://github.com/IamJesseP/Portfolio"
        />
      </div>
    </section>
  )
}

export default Work;
