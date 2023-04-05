import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header className='Header' >
    <h1>GreetingApp</h1>
    <nav className='nav'>
      <ul className='nav'>
        <li>
          <NavLink to='/' >Greeting</NavLink>
        </li>
        <li>
          <NavLink to='/' >About</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;