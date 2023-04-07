import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {FaGithub, FaLinkedin, FaDev} from 'react-icons/fa';
import profile from "../assets/about1.jpg"

function About () {
  return (
    <section class='section bg-[#d3cfca] min-h-[85vh] lg:min-h-[78vh] flex items-center' id='about'>
      <div className='container mx-auto mt-[85px] pb-[50px]'>
        <motion.div 
          className='flex-1 font-primary text-[#1a1818]'
          variants={fadeIn('up', 0.7)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.1}}
        >
          <h2 className='h2 about-heading pt-12 '>About me</h2>
          <hr className='text-black w-[90%] h-[2px] m-6 bg-black flex justify-center' />
          <img src={profile} alt='profile'className='float-right xs:h-[0px] sm:h-[200px] lg:h-[350px] rounded-md'></img>
          <div className='leading-5 text-[16px]'>
            <p className= 'font-secondary flex flex-wrap p-2'>
              After spending the past six years in the healthcare industry, I resparked my passion for technology at the peak of the COVID pandemic. 
              I worked 12 hour shifts on the COVID floor for the first six months at the start of the pandemic. A large escape for me was re-exploring
              basic programming through learning resources such as Codeacademy and Youtube. I have always been fond of tech-related things, from building PCs 
              to learning basic programming in high school, but I was steered toward becoming a healthcare professional as I grew older. </p>
            <p className= 'font-secondary flex flex-wrap p-2'>
              As my interest in software engineering deepened, I recognized it as my true calling and made the decision to fully commit to it by 
              pursuing a B.S. in Software Engineering. Through various resources, including formal education and online learning platforms such 
              as The Odin Project, Scrimba, and Udemy, I am continuously expanding my knowledge and mastering new concepts in the field.<br/>
            </p>
            <p className= 'font-secondary flex flex-wrap p-2'>
              I am delighted with my decision to transition into this field, as I find great satisfaction in problem-solving and continuous learning. 
              My professional background has equipped me with valuable skills such as empathy, teamwork, and the ability to perform effectively under pressure.
            </p>
          </div>
          <h3 className='h3 about-heading'>Hobbies & Interests</h3>
          <ul className='flex p-4 flex-wrap font-secondary text-sm text-black'>
            <li className= 'tag bg-black/20 text-black'>🎮Gamer boy</li>
            <li className= 'tag bg-black/20 text-black'>🌆City explorer</li>
            <li className= 'tag bg-black/20 text-black'>🥘Foodie </li>
            <li className= 'tag bg-black/20 text-black'>📺Anime/K-drama</li>
            <li className= 'tag bg-black/20 text-black'>🎾Tennis</li>
            <li className= 'tag bg-black/20 text-black'>🖥️PC building</li>
            <li className= 'tag bg-black/20 text-black'>⌨️Mechanical keyboards</li>
            <li className= 'tag bg-black/20 text-black'>🎲D&D</li>
          </ul>
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
