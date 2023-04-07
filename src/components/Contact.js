import React from 'react';

function Contact () {
  return (
    <section className='lg:section py-16 bg-[#d3cfca] pb-[400px]' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col text-[#1a1818] lg:flex-row tracking-wide'>
        <div>
          <div>
            <h2 className='text-[60px] lg:text-[90px] leading-none font-primary m-24'>Let's get in <br/>touch!</h2>
          </div>
        </div>
        <form className='flex-1 font-secondary border-black rounded-2x1 flex flex-col 
          gap-y-6 pb-24 p-6 items-start lg:mt-[250px] bg-black/20 rounded-lg'>
          <h4 className='text-xl font-primary'>Contact me</h4>
          <input 
            className='bg-black/20 border-black p-3 outline-none w-full 
            placeholder:text-black focus:border-accent transition-all rounded-md '
            type='text'
            placeholder='Your name'
          />
          <input 
            className='bg-black/20 border-black p-3 outline-none w-full 
            placeholder:text-black focus:border-accent transition-all rounded-md'
            type='email'
            placeholder='Email'
          />
          <textarea 
            className='bg-black/20 border-black p-3 outline-none w-full
             placeholder:text-black focus:border-accent transition-all rounded-md'
            placeholder='Your message'
          ></textarea>
          <button className='btn btn-lg'>Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;
