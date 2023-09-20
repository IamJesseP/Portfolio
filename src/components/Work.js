import React from 'react';
import Project from './Project.js';
import taskmngmt from '../assets/taskmngmt.gif'
import inventoryProj from '../assets/invmng.gif'
import newsagg from '../assets/newsagg.gif'
import ecobots from '../assets/ecobots.gif'
import appointment from '../assets/appointment.gif'
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
            img={ecobots}
            title='Ecobots - AI Recycling Companion'
            description='An AI full-stack recycling application. Users can upload a picture of their recyclable item to have it identified by our AI model as well as given summary findings of the individual impact they will have to the environment for recycling the item.  '
            tag1="React"
            tag2="Node.JS"
            tag3="Express.js"
            tag4="RESTful API"
            tag5="Jupyter Notebooks, Ultralytics YOLOv8"
            tag6="Hugging Face API, OpenAI API"
            tag7="Vercel/Heroku"
            projectUrl="https://ecobots.vercel.app/"
            githubUrl="https://github.com/IamJesseP/EcoBots-AI-Recycling"
          />
          <Project 
            img={newsagg}
            title='Forecast-News Aggregator'
            description='A full-stack application that provides users with an interface to view weather data, air quality data, and news articles based on the city and state they input.  '
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
            description='A fullstack task management application. Registered users are given role-based access, customizing user experiences based on their roles, with special functionalities
            like task claiming and status updates for students, and task creation and monitoring for companies. '
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
            img={appointment}
            title='Appointment Scheduler'
            description="A Windows Forms(.NET Framework) appointment application written in C#, connected to a MySQL database."
            tag1="C#"
            tag2=".NET Framework"
            tag3="Windows Forms"
            tag4="MySQL"
            tag5="MVC System Design"
            tag6="Git"
            projectUrl="https://github.com/IamJesseP/Appointment-Scheduler"
            githubUrl="https://github.com/IamJesseP/Appointment-Scheduler"
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
      </div>
    </section>
  )
}

export default Work;
