import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {FaGithub, FaLinkedin, FaDev} from 'react-icons/fa';
import profile from "../assets/about1.jpg"

function About () {
  return (
    <section class='section bg-[#d3cfca] min-h-[85vh] lg:min-h-[78vh] flex items-center' id='about'>
      <div className='container mx-auto mt-[85px]'>
        <motion.div 
          className='flex-1 font-primary text-[#1a1818]'
          variants={fadeIn('up', 0.7)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.4}}
        >
          <h2 className='h2 about-heading pt-12 '>About me</h2>
          <hr className='text-black w-[90%] h-[2px] m-6 bg-black flex justify-center' />
          <img src={profile} alt='profile'className='float-right xs:h-[0px] sm:h-[200px] lg:h-[350px] rounded-md'></img>
          <p className= 'font-secondary flex flex-wrap p-2 text-[16px]'> Lorem ipsum Lorem Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem Lorem</p>
          <h3 className='h3 about-heading'>Hobbies & Interests</h3>
          <p className='font-secondary flex flex-wrap p-2 text-[16px]'>Lorem ipsum Lorem Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem Lorem Lorem ipsum Lorem Lorem</p>
          <h3 className='h3 about-heading'>Skills:</h3>
          <ul className='font-secondary flex flex-wrap p-2'>
            <li class='tag'>HTML/CSS</li>
            <li class='tag'>Javascript</li>
            <li class='tag'>React</li>
            <li class='tag'>Tailwind</li>
            <li class='tag'>Express</li>
            <li class='tag'>Node</li>
            <li class='tag'>C#</li>
            <li class='tag'>PostgresSQL</li>
            <li class='tag'>Firebase</li>
            <li class='tag'>AWS</li>
          </ul>
          <h3 className='h3 about-heading text-center'>Find me on</h3>
          <div className='flex justify-center'>
            <a href='https://github.com/IamJesseP' target='_blank' rel="noreferrer">
              <FaGithub className='h-12 w-12 m-4' />
            </a>
            <a href='https://www.linkedin.com/in/jperez-2018/' target='_blank' rel="noreferrer">
              <FaLinkedin className='h-12 w-12 m-4' />
            </a>
            <a href='https://dev.to/iamjessep' target='_blank' rel="noreferrer">
              <FaDev className='h-12 w-12 m-4' />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;
