import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { LuMail } from 'react-icons/lu';
import { useTheme } from '../../ThemeContext';
import { FaRegCopyright } from 'react-icons/fa';

const Footer = (() => {

    const {theme} = useTheme();


    return (
        <footer className={`footerColor ${theme}-mode`}>
            <div className='footer-content'>
                <h1>Thank you for viewing my portfolio!</h1>
                <ul>
                    <li>
                        <a href="https://github.com/andreif3112" 
                            alt="GitHub"
                            target="_blank"
                            className = {`${theme}-mode`}
                            data-hover="GitHub"
                            rel="noreferrer" > 
                            <FontAwesomeIcon icon={faGithub} color='var(--text-dark)' />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/andrei-favorito/" 
                            alt="LinkedIn"
                            target="_blank"
                            className = {`${theme}-mode`}
                            data-hover="LinkedIn"
                            rel="noreferrer"> 
                            <FontAwesomeIcon icon={faLinkedin} color='var(--text-dark)'/>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:andrefr2k21@gmail.com" 
                        className = {`${theme}-mode`}
                        alt="Email"
                        data-hover="Email"
                        rel="noreferrer"> 
                        <LuMail />
                        </a>
                    </li>
                </ul>
                <p><FaRegCopyright className='copyright-icon'/>
                    &nbsp;Copyright 2025 Andrei Favorito. Some images licensed via Pixabay.<br/> 
                    Hosted by GitHub Pages. Last updated July 2025.
                </p>
            </div>
        </footer>
    );
});


export default Footer;