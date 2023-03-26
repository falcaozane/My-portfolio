import React from 'react';
import ZaneLogo1 from '../assets/ZaneLogo1.svg'
import ZaneLogo2 from '../assets/ZaneLogo2.svg'
import logo from '../assets/Zane-removebg-preview.png'

const Header = () => {
  return(
    <header className=' py-8'>
      <div className='container mx-auto '>
          <div className='flex justify-between items-center '>
            {}
            <a href='#'>
              <img src={logo} alt='' />
            </a>
            {}
            <button className='btn btn-sm'>Work with me</button>
          </div>
      </div>
    </header>
  );
};

export default Header;
