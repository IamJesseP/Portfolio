import React from 'react';
//images
import Logo2 from '../assets/logo1.svg'

function Header () {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='home'>
            <img src={Logo2} alt='logo' className='h-24 p-4' />
          </a>
          <button className='btn btn-sm'>Portfolio</button>
        </div>
      </div>
    </header>
  )
}

export default Header;
