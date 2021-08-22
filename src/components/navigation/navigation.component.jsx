import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

import './navigation.styles.scss';

function Navigation() {
    const [click, setClick] = useState(false);
 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);    
        return (
            <>
                <nav className='navbar'>
                    <a href='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <div className='logo'>
                            <span className='logo-word-1'>Exam</span> 
                            <span className='logo-word-2'>Bay</span>
                        </div>
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        {click 
                            ?  
                            <FontAwesomeIcon icon={faTimes} className='fa-times' /> 
                            : 
                            <FontAwesomeIcon icon={faBars} className='fa-bars' />
                        }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='about-us' className='nav-links'onClick={closeMobileMenu}>
                                About Us
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='free-test' className='nav-links' onClick={closeMobileMenu}>
                                Free Test
                            </a>
                        </li>
                        <li>
                            <a href='latest-news' className='nav-links' onClick={closeMobileMenu}>
                                Latest News
                            </a>
                        </li> 
                        <li>
                            <a href='e-shop' className='nav-links' onClick={closeMobileMenu}>
                                E-Shop
                            </a>
                        </li>
                        <li>
                            <a href='contact-us' className='nav-links' onClick={closeMobileMenu}>
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href='switch-to-affiliate' className='nav-links' onClick={closeMobileMenu}>
                                Switch To Affiliate
                            </a>
                        </li>
                        <li>
                            <a href='sign-in' className='nav-links sign-in' onClick={closeMobileMenu}>
                                Sign in
                            </a>
                        </li>               
                    </ul>
                </nav>
            </>
        );
};
    
export default Navigation;