import './index.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';
import img1 from '../../assets/images/basketball-147657_1280.jpg';
import img2 from '../../assets/images/airline-plane.png';
import img3 from '../../assets/images/ecommerce-3000.png'

const Projects = () => {
    const {theme} = useTheme();

    return (
        <div className={`projects-container ${theme}-mode`}>
            <div className={`projects-content ${theme}-mode`} >
                <h1>Projects</h1>
                    <a
                        href="https://github.com/andreif3112/AI-Customer-Service-Agent"
                        rel="noreferrer"
                        target="_blank"
                        className = {`tile ${theme}-mode`}>
                            <h1>AI Customer Service Agent</h1>
                            <span className='img-text'>
                                <div className='left'>
                                    <img src={img3} alt='A customer service representative' className='representative-img'/>
                                </div>
                                <div className='right'>
                                    <p>This project is an AI-powered service agent that helps restaurant chains by taking customer orders.</p>
                                </div>
                            </span>
                            <span className='projects-link'><u className='projects-link-text'>View Project</u>&nbsp;<FaExternalLinkAlt className={`projects-link-icon`}/></span>
                    </a>
                    <a
                        href="https://github.com/andreif3112/Airline-Rewards-System-Java"
                        rel="noreferrer"
                        target="_blank"
                        className = {`tile ${theme}-mode`}>
                            <h1>Airline Rewards System</h1>
                            <span className='img-text'>
                                <div className='left'>
                                    <img src={img2} alt='A blue commercial airplane' className='airline-img'/>
                                </div>
                                <div className='right'>
                                    <p>This project is a Java-based airline rewards system. A file containing flight passenger data is parsed, and that data is used to determine the airline tier for a passenger.</p>
                                </div>
                            </span>
                            <span className='projects-link'><u className='projects-link-text'>View Project</u>&nbsp;<FaExternalLinkAlt className={`projects-link-icon`}/></span>
                    </a>
                    <a 
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/andreif3112/AIM-BasketballHighlightClassifier"
                        className={`tile ${theme}-mode`}
                    >
                            <h1>Basketball Highlight Classifier</h1>
                            <span className='img-text'>
                                <div className='left'>
                                    <img src={img1} alt='Basketball player dunking' className='classifier-img'/>
                                </div>
                                <div className='right'>
                                    <p>This project employs computer vision to classify a short video clip to a statistical category in basketball.</p>
                                </div>
                            </span>
                            {/* Use HTML entity (&nbsp;) to give one space b/t text and icon */}
                            <span className='projects-link'><u className='projects-link-text'>View Project</u>&nbsp;<FaExternalLinkAlt className={`projects-link-icon`}/></span>
                    </a>
            </div>
        </div>
    )
}


export default Projects;