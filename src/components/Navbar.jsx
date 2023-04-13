import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header>
        <h1 className='navbarh1'>hello</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </header>
  );
}

export default Navbar;
