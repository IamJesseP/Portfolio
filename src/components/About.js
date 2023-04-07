import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {useInView} from 'react-intersection-observer';
import {FaGithub, FaLinkedin, FaDev} from 'react-icons/fa';
import profile from "../assets/about1.jpg"

function About () {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })



  return (
    <div class='section bg-[#d3cfca]  pb-[300px] pt-[150px] min-h-[85vh] lg:min-h-[78vh]' id='about'>
      <div className='container mx-auto'>
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
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>HTML/CSS</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>Javascript</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>React</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>Tailwind</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>Express</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>Node</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>C#</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>PostgresSQL</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>Firebase</li>
            <li class='px-1 m-1 bg-[#1a1818] rounded-md text-[#ece7e1]'>AWS</li>
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
    </div>
  )
}

export default About;
