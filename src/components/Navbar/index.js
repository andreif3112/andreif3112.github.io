import './index.scss';
import { Link } from 'react-scroll';
import {useState} from 'react';
import '../../App.scss'; // use root var colors

import { IoMoonOutline } from 'react-icons/io5';
import { GoSun } from 'react-icons/go';

import { useTheme } from '../../ThemeContext';



const Nav = () => {

    // START for dark/light mode toggle ---------------------------------------------------------------------
    const {theme, toggleTheme} = useTheme();
    // END for dark/light mode toggle -----------------------------------------------------------------------


    // START for hambur menu -- for responsiveness ----------------------------------------------------------
    const [menuOpen, setMenuOpen] = useState(false);
    const openCloseMenu = (() => {
         setMenuOpen(!menuOpen);
    });
    // END for hambur menu -- for responsiveness -------------------------------------------------------------
    

    return (
        <nav className={`navClass ${theme}-mode navClassColor ${menuOpen? 'open': ''} `} >
            {/* for smaller screens */}
            <div className='menuNav' onClick={openCloseMenu}>
                <span className={`span1 ${menuOpen? "open": ""} ${theme}-mode`}></span>
                <span className={`span2 ${menuOpen? "open": ""} ${theme}-mode`}></span>
                <span className={`span3 ${menuOpen? "open": ""} ${theme}-mode`}></span>
            </div>

            <ul className={`navList ${menuOpen? "open": ""} ${theme}-mode`}>
                {/* dark/light mode toggle */}
                <span className='navListLeft'>
                    <li>
                        <input type="checkbox" id="darkModeToggle" checked={theme === 'light'} onChange={toggleTheme}/>
                        <label for="darkModeToggle" >            
                            <IoMoonOutline className="moon" />
                            <GoSun className="sun" />
                        </label>
                    </li>
                </span>

                <span className='navListRight'>
                    <li>
                        <Link
                        className={`link ${theme}-mode`}
                        activeClassName='active'
                        to="home" /* refers to name prop of Element component in App.js */
                        smooth={true}
                        duration={500} // duration of scroll animation when Link is clicked
                        spy={true} // used for active 
                        > 
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`link ${theme}-mode`}
                            activeClassName='active'
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`link ${theme}-mode`}
                            activeClassName='active'
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                        >
                            Projects
                        </Link>
                    </li>
                </span>
            </ul>
        </nav>

    );
}

export default Nav;
