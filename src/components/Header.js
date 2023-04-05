import React from 'react';
//images
import Logo from '../assets/logo.svg';


function Header () {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='logo' className='h-24 p-4' />
          </a>
          <button className='btn btn-sm'>Projects</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
