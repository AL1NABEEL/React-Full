import React from 'react';
import { Link } from 'react-router-dom';
import { links } from './Linksfornav';
import BurgerMenu from '../assets/menu.png';


  export default function Navbar() {
  
    return (
      <header
        className={`bg-violet-600  flex justify-between items-center p-2 border-b-2 border-b-gray-300`}
      >
        <div className='text-xl font-medium'>FULL THING</div>
        <nav className='hidden md:flex'>
          {links.map((link, i) => (
            <Link key={i} className='mx-3 md:block text-m text-white hover:text-black' to={link.link}>
              {link.name}
            </Link>
          ))} </nav> 
          <img
        className='block md:hidden'
        src={BurgerMenu}
        width={20}
        height={20}
        alt='buger menu'
      />{' '}
      </header>
    );
  }















