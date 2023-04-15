import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from './Signup';

function Navbar() {
  return (
    <header className='navbar'>
        <p className='navbarh1'>Full Thing</p>
        <nav className='nav-links'>
      <Link className='nav-links' to='/'>Home</Link>
      <Link className='nav-links' to='/About'>About</Link> 
      <Link className='nav-links' to='/Signup'>Sign Up</Link> 
      </nav>

    </header>
  );
}

export default Navbar;
