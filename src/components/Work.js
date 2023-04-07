import React from 'react';
import Project from './Project.js';
import etchsketch from '../assets/etchsketch.gif'
import portfolio from '../assets/portfolio.gif'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

function Work () {
  return (
    <section className='section min-h-[85vh] lg:min-h-[78vh] flex items-center' id='work' >
      <div className='flex-1 container mx-auto mt-[85px]'>
        <motion.h2 
          className='h2 p-2 font-primary text-[#1a1818]'
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
        >
          Projects
        </motion.h2>
        <motion.hr 
          className='text-black w-[90%] h-[2px] m-6 bg-black flex justify-center'
          variants={fadeIn('right', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
        ></motion.hr>
        <Project 
          img={portfolio}
          title='Personal Portfolio'
          description="You're already here! A single page app to learn a little bit more about me, my skills, and personal projects"
          tag1="React"
          tag2="Tailwind CSS"
          tag3="Vercel"
          projectUrl="https://jesseperez.com"
          githubUrl="https://github.com/IamJesseP/Portfolio"
        />
        <Project 
          img={etchsketch}
          title='Etch-A-Sketch'
          description='A browser version of the classic Etch-A-Sketch toys from our childhood! Implemented with HTML, CSS, and Javascript'
          tag1="HTML/CSS"
          tag2="Javascript"
          tag3="Git"
          tag4="Linux"
          projectUrl="https://iamjessep.github.io/Etch-A-Sketch/"
          githubUrl="https://github.com/IamJesseP/Etch-A-Sketch"
        />

      </div>
    </section>
  )
}

export default Work;
