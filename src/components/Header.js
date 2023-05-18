import React from 'react';
//images
import Logo2 from '../assets/logo1.svg'
import { Link } from 'react-scroll';

function Header () {
  return (
    <header>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='home'>
            <img src={Logo2} alt='logo' className='h-24 p-4' />
          </a>
          <Link 
          to='work' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={40}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
          >
            <button className='btn btn-sm'to='work'>Projects</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;
