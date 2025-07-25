import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LuMail } from 'react-icons/lu';
import { PiCaretDownLight } from 'react-icons/pi';
import { useTheme } from '../../ThemeContext'; // for dark/light mode
import { Link } from 'react-scroll';

const Home = () => {

    const { theme } = useTheme();    
    
    return (
        <div className={`home-container ${theme}-mode`} >
            <div className='home-content0'>
                <div className='home-content'>
                    <h1 className={`${theme}-mode`}>
                    Hello there!<br />
                    I am<br />
                    Andrei Favorito.
                    </h1>
                    <ul>
                        <li>
                            <a href="https://github.com/andreif3112" 
                                alt="GitHub"
                                className = {`${theme}-mode`}
                                data-hover="GitHub"
                                rel="noreferrer" > 
                                <FontAwesomeIcon icon={faGithub} className={`icon ${theme}-mode`} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/andrei-favorito/" 
                                alt="LinkedIn"
                                className = {`${theme}-mode`}
                                data-hover="LinkedIn"
                                rel="noreferrer"> 
                                <FontAwesomeIcon icon={faLinkedin} className={`icon ${theme}-mode`} color='transparent'/>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:andrefr2k21@gmail.com" 
                            className = {`${theme}-mode`}
                            alt="Email"
                            data-hover="Email"
                            rel="noreferrer"> 
                            <LuMail className={`icon ${theme}-mode`} />
                        </a>
                        </li>
                    </ul>
                    <Link className={`goToAbout ${theme}-mode`} to="about" smooth={true}>
                        <span>Get to know me</span>
                        <PiCaretDownLight className='caretToAbout'/>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Home;