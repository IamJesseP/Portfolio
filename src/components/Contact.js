import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

function Contact () {

  const [result, showResult] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    

    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_3wvb7zr', form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true)
  };


  return (
    <section className='section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col text-[#1a1818] lg:flex-row tracking-wide'>
        <div>
            <motion.h2 className='text-[60px] lg:text-[90px] leading-none 
              font-primary m-24 xs:mr-[-30px]'
              variants={fadeIn('right', 0.3)} 
              initial='hidden' 
              whileInView={'show'}
              viewport={{once:false, amount:0.7}}
            >
              Let's get in <br/>touch!
            </motion.h2>
        </div>
        <motion.form
          variants={fadeIn('left', 0.3)} 
          initial='hidden' 
          whileInView={'show'}
          viewport={{once:false, amount:0.3}} 
          ref={form}
          action=""
          onSubmit={sendEmail}
          className='flex-1 font-secondary border-black rounded-2x1 flex flex-col 
          gap-y-6 pb-24 p-6 items-start lg:mt-[250px] bg-black/20 rounded-lg mb-[20px]'
        >
          <h4 className='text-xl font-primary'>Contact me</h4>
          <input 
            className='bg-black/20 border-black p-3 outline-none w-full 
            placeholder:text-black focus:border-accent transition-all rounded-md '
            type='text'
            placeholder={result ? "" : 'Your name'}
            name='fullName'
            disabled={result}
            required
          />
          <input 
            className='bg-black/20 border-black p-3 outline-none w-full 
            placeholder:text-black focus:border-accent transition-all rounded-md'
            type='email'
            placeholder={result ? "" : 'Email'}
            name='email'
            disabled={result}
            required
          />
          <textarea 
            className='bg-black/20 border-black p-3 outline-none w-full
             placeholder:text-black focus:border-accent transition-all rounded-md'
            placeholder={result ? "Thank you for the message. I'll respond soon!" : 'Your message'}
            name='message'
            disabled={result}
            required
          ></textarea>
          <div className='flex flex-row flex-wrap justify-center'>
            { !result ? 
              <button className='btn btn-lg' input='submit' value='Send'>
                Send Message
              </button> : null 
            }
            { result ? 
                <motion.button 
                  className='btn btn-lg text-green-700' 
                  variants={fadeIn('up', 0.8)} 
                  initial='hidden' 
                  whileInView={'show'}
                  disabled= {result}
                >
                  Message sent!
                </motion.button>
               : null
            }
          </div>
        </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
