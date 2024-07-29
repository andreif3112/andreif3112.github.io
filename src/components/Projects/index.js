import './index.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../../ThemeContext';
import img1 from '../../assets/images/yolov5-bounding-bg.png';

const Projects = () => {
    const {theme} = useTheme();

    return (
        <div className={`projects-container ${theme}-mode`}>
            <div className={`projects-content ${theme}-mode`} >
                <h1>Projects</h1>
                <a 
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/andreif3112/AIM-BasketballHighlightClassifier"
                    className={`tile ${theme}-mode`}
                >
                        <h2>Basketball Highlight Classifier</h2>
                        <span className='img-text'>
                            <img src={img1} alt='Basketball players in bounding box' ></img>
                            <p>This project employs computer vision to classify a short video clip to a statistical category in basketball.
                                <br /><br />
                                This is an extracurricular project from my time as a mentee in the UT Dallas Artificial Intelligence
                                Society mentorship program.
                            </p>
                        </span>
                        <span className='projects-link'>View Project  <FaExternalLinkAlt className={`projects-link-icon ${theme}-mode`}/></span>
                </a>
            </div>
        </div>
    )
}


export default Projects;