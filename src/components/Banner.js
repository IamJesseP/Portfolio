import React from 'react';
import Spline from '@splinetool/react-spline';
//icons
import {FaGithub, FaLinkedin, FaMedium} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from '../variants'

function Banner() {
  return (
    <section className='section' id='home'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row lg:items-center lg:gap-x-12'>
            <div className='flex-1  font-primary lg:text-left'>
              <h1 className='text-[50px] font-bold leading-[0.8] lg:text-[70px] text-[#1a1818]'>
                Jesse <span>Perez</span>
              </h1>
            <div className='mb-6 text-[36px] lg:text-[50px] font-primary 
            font-semibold  leading-[1] lg:text-left text-[#1a1818]'>
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
            </div>
            <p className='text-[#1a1818] font-secondary'>I am a Software Engineering student at Western Governors University. <br></br>I'm based in San Diego, California</p>
            </div>
            <div className='xs:ml-[-100px] sm:ml-[-10px] '>
              <Spline  scene="https://prod.spline.design/ael0SPtQzew44egO/scene.splinecode" />
            </div>
          </div>
        </div>
    </section>
  ) 
}

export default Banner;
