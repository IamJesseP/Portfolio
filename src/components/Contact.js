import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact () {

  const [result, showResult] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    

    e.preventDefault();

    emailjs.sendForm('service_vi5i1jm', 'template_3wvb7zr', form.current, 'laIERl0rEC3uPR8Gs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      showResult(true)
  };



  return (
    <section className='section bg-[#d3cfca]  min-h-[85vh] lg:min-h-[78vh] flex items-center' id='contact'>
      <div className='container mx-auto mt-[85px]'>
        <div className='flex flex-col text-[#1a1818] lg:flex-row tracking-wide'>
        <div>
            <h2 className='text-[60px] lg:text-[90px] leading-none font-primary m-24 xs:mr-[-30px]'>Let's get in <br/>touch!</h2>
        </div>
        <form 
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
            placeholder='Your name'
            name='fullName'
          />
          <input 
            className='bg-black/20 border-black p-3 outline-none w-full 
            placeholder:text-black focus:border-accent transition-all rounded-md'
            type='email'
            placeholder='Email'
            name='email'
          />
          <textarea 
            className='bg-black/20 border-black p-3 outline-none w-full
             placeholder:text-black focus:border-accent transition-all rounded-md'
            placeholder='Your message'
            name='message'
          ></textarea>
          <div className='flex flex-row flex-wrap justify-center'>
            
            { !result ? 
              <button className='btn btn-lg' input='submit' value='Send'>
                Send Message
              </button> : null 
            }
            { result ? 
              <div className='font-secondary text-[#1a1818] flex-1 sm:ml-10 sm:mt-1 text-center'> 
                <button className='btn btn-lg' input='submit' value=''>
                  Message sent!
                </button>
              </div> : null
            }
          </div>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
