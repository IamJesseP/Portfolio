import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
//


//TODO: Finish framer motion for contact, add functionality to contact, add content to about page, deploy build to vercel/netlify
function App () {
  return (
    <div className='bg-[#ece7e1]'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      <div className='pb-[400px]'></div>
    </div>
  );
};

export default App;
