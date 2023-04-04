import React from 'react';
//icons
import { BiClipboard, BiHomeAlt, BiUser} from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';

//link
import { Link } from 'react-scroll';

function Nav () {
  return (
    <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-24 backdrop-blur-2xl mx-auto 
        rounded-full max-w-md px-5 flex items-center justify-between
        text-2xl text-white/60'>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiHomeAlt />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BiUser />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsClipboardData />
          </Link>
          <Link className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
