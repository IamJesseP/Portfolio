import React from 'react';
import Project from './Project.js';
import about from '../assets/etchsketch.gif'

function Work () {
  return (
    <div className='section' id='work'>
      <div className='flex-1 container mx-auto pt-[100px]'>
        <h2 className='h2 p-2 font-primary text-[#1a1818]'>Projects</h2>
        <hr className='text-black w-[90%] h-[2px] m-6 bg-black flex justify-center' />
        <Project 
          img={about}
          title='Test'
          description='This is in fact a test description to test the description.'
          tag1="HTML/CSS"
          tag2="Javascript"
          tag3="Git"
          tag4="Linux"
          projectUrl="#"
          githubUrl="#"
        />
        <Project 
          img={about}
          title='Test'
          description='This is in fact a test description to test the description.'
          tag1="HTML/CSS"
          tag2="Javascript"
          tag3="Git"
          tag4="Linux"
          projectUrl="#"
          githubUrl="#"
        />
        <Project 
          img={about}
          title='Test'
          description='This is in fact a test description to test the description.'
          tag1="HTML/CSS"
          tag2="Javascript"
          tag3="Git"
          tag4="Linux"
          projectUrl="#"
          githubUrl="#"
        />
      </div>
    </div>
  )
}

export default Work;
