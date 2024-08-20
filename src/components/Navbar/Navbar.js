import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <nav className='navbar'>
      <div className='hamburger' onClick={handleClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className='nav-content'>
        <div className="logo">
          <Link to='/'>
            <img src='https://i.imgur.com/Lg3kv0j.png' alt="ECESS Logo" />
          </Link>
        </div>
        <ul className={isActive ? 'nav-links open' : 'nav-links'}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/faculty'>Faculty</Link></li>
          <li><Link to='/team'>Team</Link></li>
          <li><Link to='/events'>Events</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
