import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

import profile from "../assets/about1.jpg"

function About () {
  const [showMore, setShowMore] = useState(false);

  const extraContent = (
    <>
      <p className='font-secondary flex flex-wrap p-2'>
        . . . I recognized it as my true calling and made the decision to fully commit to it by 
        pursuing a B.S. in Software Engineering. Through various resources, including formal education and online learning platforms such 
        as The Odin Project, Scrimba, and Udemy, I am continuously expanding my knowledge and mastering new concepts in the field.<br/>
      </p>
      <p className='font-secondary flex flex-wrap p-2'>
        I am delighted with my decision to transition into this field, as I find great satisfaction in problem-solving and continuous learning. 
        My professional background has equipped me with valuable skills such as empathy, teamwork, and the ability to perform effectively under pressure.
      </p>
      {showMore && <button onClick={() => setShowMore(!showMore)} className='font-secondary p-2 font-bold underline'>
        Read less
      </button>}
    </>
  );
  return (
    <section class='section' id='about'>
      <div className='container mx-auto'>
        <motion.div 
          className='flex-1 font-primary text-[#1a1818]'
          variants={fadeIn('up', 0.7)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.2}}
        >
          <h2 className='h2 about-heading pt-12 '>About me</h2>
          <hr className='text-black w-[90%] h-[2px] m-6 bg-black flex justify-center' />
          <img src={profile} alt='profile'className='float-right xs:h-[0px] sm:h-[200px] lg:h-[350px] rounded-md'></img>
          <div className='leading-5 text-[16px] tag bg-[#d3cfca] text-black max-w-[650px]'>
          <p className='font-secondary flex flex-wrap p-2'>
        After spending the past six years in the healthcare industry, I resparked my passion for technology at the peak of the COVID pandemic. 
        I worked 12 hour shifts on the COVID floor of my hospital and it wasn't easy! A large escape for me was re-exploring
        basic programming through learning resources such as Codeacademy. I have always been fond of tech-related things, from building PCs 
        to learning basic programming in high school, but I was steered toward becoming a healthcare professional as I grew older...
        <br/> 
        <p className='mt-4'>
          As my interest in software engineering deepened . . .
        {!showMore &&  <button onClick={() => setShowMore(!showMore)} className='font-secondary p-2 font-bold underline'>
        Learn more
      </button>}
        </p>
        {showMore ? extraContent : null}
      </p>
          </div>
          <h3 className='h3 about-heading'>Hobbies & Interests</h3>
          <ul className='flex p-4 flex-wrap font-secondary text-sm text-black'>
            <li className= 'tag bg-black/20 text-black'>🌆City explorer</li>
            <li className= 'tag bg-black/20 text-black'>🥘Foodie </li>
            <li className= 'tag bg-black/20 text-black'>📺Anime/K-drama</li>
            <li className= 'tag bg-black/20 text-black'>🎾Tennis</li>
            <li className= 'tag bg-black/20 text-black'>🎮Gamer boy</li>
            <li className= 'tag bg-black/20 text-black'>🖥️PC building</li>
            <li className= 'tag bg-black/20 text-black'>⌨️Mechanical keyboards</li>
            <li className= 'tag bg-black/20 text-black'>🎲D&D</li>
          </ul>
          <h3 className='h3 about-heading mt-[0px]'>Experiences</h3>
          <ul className='ml-4'>
            <li>
              <h3 className='mb-[-8px]'>
               Machine Learning Fellow
              </h3>
               <span className='tag bg-black/20 text-black font-secondary text-sm'>HeadStarter</span>
               <p className='text-sm font-secondary max-w-[700px] ml-4'>
                • Immersed in AI concepts, focusing on <u>machine learning algorithms</u>, <u>deep learning models</u>, and <u>ethical AI considerations</u>.<br/>
                • Applied theoretical understanding of machine learning models to develop practical AI solutions during the <u>SureStart x MIT Futuremakers</u> Create-a-thon event, including data preprocessing, model selection, training, and evaluation. <br/>
                • <u>Strengthened leadership and communication skills</u> in a technical context by leading project discussions, coordinating team efforts, and presenting technical findings to peers and mentors.<br/>
               </p>
            </li>
            <li>
              <h3 className='mb-[-8px]'>
               Software Engineering Fellow 
              </h3>
               <span className='tag bg-black/20 text-black font-secondary text-sm'>HeadStarter</span>
               <p className='text-sm font-secondary max-w-[700px] ml-4'>
                • Software Engineering Accelerator program consisting of comprehensive training in <u>full-stack development</u>, <u>team project building</u>, <u>soft skills</u>, and <u>interview preparation</u>. <br/>
                • Built full-stack applications utilizing technologies such as React, Node.js/Express.js, AWS DynamoDB, and Google Firebase, creating RESTful APIs and implementing various APIs <br/>
                • Received coaching from active engineers from Amazon, Bloomberg, Google, and Capital One
               </p>
            </li>
          </ul>
          <h3 className='h3 about-heading mt-[0px]'>Skills</h3>
          <ul className='font-secondary flex flex-wrap p-2'>
            <li class='tag'>Javascript</li>
            <li class='tag'>C#</li>
            <li class='tag'>Python</li>
            <li class='tag'>HTML/CSS</li>
            <li class='tag'>Tailwind</li>
            <li class='tag'>React</li>
            <li class='tag'>Node.js</li>
            <li class='tag'>Express.js</li>
            <li class='tag'>.NET</li>
            <li class='tag'>MySQL</li>
            <li class='tag'>Firebase</li>
            <li class='tag'>AWS</li>
            <li class='tag'>MongoDB</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default About;
