import React from 'react';
import Spline from '@splinetool/react-spline';
//icons
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {FaFilePdf} from 'react-icons/fa6';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

function Banner() {
  return (
    <section className='section' id='home'>
        <div className='container mx-auto lg:mt-[-80px]'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12 mt-12'>
            <div className='flex-1 font-primary lg:text-left'>
              <motion.h1 
                variants={fadeIn('up', 0.3)} 
                initial='hidden' 
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}
                className='text-[50px] sm:text-[50px] md:text-[50px] font-bold leading-[0.8] lg:text-[70px] text-[#1a1818] xs:text-[38px]'
              >
                Jesse Perez
              </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-6 text-[36px] lg:text-[50px] font-primary 
              font-semibold  leading-[1] lg:text-left text-[#1a1818] xs:text-[30px]'
            >
              <TypeAnimation 
                sequence={[
                  'Software Engineer',
                  2000,
                  'Programmer',
                  2000,
                  'Collaborator',
                  2000,
                  'Learner',
                  2000
                ]}
                speed={50}
                className='text-[#868481]'
                wrapper='span'
                repeat={Infinity}
                />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.7)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='text-[#1a1818] font-secondary pb-10 xs:text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]'
            >
              I am a Software Engineering student at Western Governors University. 
              <br></br>I'm based in San Diego, California
          <div className='flex text-[#1a1818] mt-2'>
            <a href='https://github.com/IamJesseP' target='_blank' rel="noreferrer">
              <FaGithub className='h-12 w-12 m-4' />
            </a>
            <a href='https://www.linkedin.com/in/iamjessep/' target='_blank' rel="noreferrer">
              <FaLinkedin className='h-12 w-12 m-4' />
            </a>
            <a href='https://drive.google.com/file/d/1dH9dqQwHQwk1Q7jfVKRV6xgYtQ6eUxxF/view?usp=sharing' target='_blank' rel="noreferrer">
              <FaFilePdf className='h-12 w-12 m-4' />
            </a>
          </div>
            </motion.p>
            </div>
            <motion.div 
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false, amount:0.8}}
              className='xs:ml-[-100px] sm:ml-[-10px] xs:hidden]'
            >
              <Spline  scene="https://prod.spline.design/ael0SPtQzew44egO/scene.splinecode" />
            </motion.div>
          </div>
        </div>
    </section>
  ) 
}

export default Banner;
