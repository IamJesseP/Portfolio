import React from 'react';
import Spline from '@splinetool/react-spline';
//icons
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

function Banner() {
  return (
    <section className='min-h-[95vh] lg:min-h-[78vh] flex items-center pb-[150px]' id='home'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
            <div className='flex-1  font-primary lg:text-left'>
              <motion.h1 
                variants={fadeIn('up', 0.3)} 
                initial='hidden' 
                whileInView={'show'}
                viewport={{once:false, amount:0.7}}
                className='text-[50px] font-bold leading-[0.8] lg:text-[70px] text-[#1a1818]'
              >
                Jesse <span>Perez</span>
              </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
              className='mb-6 text-[36px] lg:text-[50px] font-primary 
              font-semibold  leading-[1] lg:text-left text-[#1a1818]'
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
              className='text-[#1a1818] font-secondary pb-10'
            >
              I am a Software Engineering student at Western Governors University. 
              <br></br>I'm based in San Diego, California
            </motion.p>
            </div>
            <motion.div 
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false, amount:0.97}}
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
