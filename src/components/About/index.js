import { useTheme } from '../../ThemeContext';
import { Link } from 'react-scroll';
import './index.scss';

const About = () => {
    const {theme} = useTheme();

    return (
            <div className={`about-container ${theme}-mode`}>
                <div className={`about-content ${theme}-mode`}>
                    <h1>About</h1>
                    {/* <p>Welcome to my portfolio! My name is Andrei Favorito. <br /><br />

                    I am currently pursuing a Bachelor of Science in Computer Science
                    at the University of Texas at Dallas (UTD), and I am currently seeking a SWE internship. <br /><br />

                    I am interested in frontend web development and video game development, 
                    but I am open to learn about other technological domains such as
                    artificial intelligence.<br /><br />

                    Feel free to check out my projects <Link to="projects" smooth={true} className={`emph ${theme}-mode`}>here</Link>
                    or directly on my <a href="https://github.com/andreif3112" rel="noreferrer" className={`emph ${theme}-mode`}  >GitHub</a>
                    , and contact me via <a className={`${theme}-mode`} href="mailto:andrefr2k21@gmail.com">email</a> at:
                    andrefr2k21@gmail.com
                    </p> */}
                    <p className={`${theme}-mode`}>
                        Welcome to my portfolio! My name is Andrei Favorito. <br /><br />

                        I am an aspiring software engineer who graduated from <a href="https://www.utdallas.edu/"
                        className={`emph ${theme}-mode`}>UT Dallas</a> in May 2025, 
                        and I am currently seeking full-time opportunities to grow and learn in the tech industry. <br /><br />

                        My background includes UI/UX design and frontend web development.  
                        While I am still exploring where I want to focus my career,
                        I am curious about new challenges and want to continue to expand my skills.<br/><br/>

                        This portfolio showcases my work across various domains (AI/ML, web development, ...). 
                        Feel free to check out some of my work <Link to="projects" smooth={true} className={`emph ${theme}-mode`}>below</Link>,
                        explore my<a href="https://github.com/andreif3112" rel="noreferrer" className={`emph ${theme}-mode`}  >GitHub</a>,
                        or contact me via <a className={`${theme}-mode`} href="mailto:andrefr2k21@gmail.com">email</a> at:
                        andrefr2k21@gmail.com
                    </p>
                </div>
            </div>

    )
};
export default About;