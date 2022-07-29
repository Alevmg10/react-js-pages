import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Navbar() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960) {
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
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/react-js-pages" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li>
                <Link to="/react-js-pages" className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
                  
              <li>
                <Link to="/sign-up" className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;