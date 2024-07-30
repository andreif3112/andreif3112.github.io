import React, {useState, useEffect} from 'react'
import './index.scss';
import '../../App.scss';
import { Link } from 'react-scroll';
import { PiCaretUpLight } from 'react-icons/pi';

import { useTheme } from '../../ThemeContext';

const ScrollToTop = () => {
    // START dark/light --------------------------------------------
    const {theme} = useTheme(); // must be in curly braces, not square brackets! 
    
    // END dark/light --------------------------------------------



    const [scrollTopAppear, setScrollTopAppear] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setScrollTopAppear(true);
            }
            else {
                setScrollTopAppear(false);
            }
        })
    });

    return (
        <Link 
        to="home"
        duration={500}
        smooth = {true}
        >
            {scrollTopAppear && <PiCaretUpLight className={`scrollTop ${theme}-mode`}/> }
        </Link>
    )
}

export default ScrollToTop;