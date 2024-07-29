import { useTheme } from '../../ThemeContext';
import { Link } from 'react-scroll';
import './index.scss';

const About = () => {
    const {theme} = useTheme();

    return (
            <div className={`about-container ${theme}-mode`}>
                <div className={`about-content ${theme}-mode`}>
                    <h1>About</h1>
                    <p>Welcome to my portfolio! My name is Andrei Favorito. <br /><br />

                    I am currently pursuing a Bachelor of Science in Computer Science
                    at the University of Texas at Dallas (UTD), and I am currently seeking a SWE internship. <br /><br />

                    I am interested in frontend web development and video game development, 
                    but I am open to learn about other technological domains such as
                    artificial intelligence.<br /><br />

                    Feel free to check out my projects <Link to="projects" smooth={true} className={`emph ${theme}-mode`}>here</Link>
                    or directly on my <a href="https://github.com/andreif3112" rel="noreferrer" className={`emph ${theme}-mode`}  >GitHub</a>
                    , and contact me via <a className={`${theme}-mode`} href="mailto:andrefr2k21@gmail.com">email</a> at:
                    andrefr2k21@gmail.com
                    </p>
                </div>
            </div>

    )
};
export default About;