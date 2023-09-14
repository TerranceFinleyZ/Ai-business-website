import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GrGraphQl } from "react-icons/gr";
import { BiMenu, BiX } from "react-icons/bi";
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick=
          {closeMobileMenu}>
            Imperial-AI <GrGraphQl />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? <BiX/> : <BiMenu/> }
          </div> 
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Cards' className='nav-links' onclick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/GetStarted' className='nav-links' onclick={closeMobileMenu}>
                Get Started
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Generator' className='nav-links' onclick={closeMobileMenu}>
                AI Generator
              </Link>
            </li>                                    
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</
          Button>} 
        </div>
      </nav>
    </>
  );
}

export default Navbar;