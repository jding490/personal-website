import './Footer.css';
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-left">
                        <div className="nav-icons">
                            <div className="LinkedIn">
                                <a href="https://www.linkedin.com/in/jonathandingg/">
                                    <FaLinkedin className="nav-icon" size={30} />
                                </a>
                            </div>
                            <div className="Email">
                                <a href="mailto:jonathd@umich.edu">
                                    <FaEnvelope className="nav-icon" size={30} />
                                </a>
                            </div>
                            <div className="Github">
                                <a href="https://github.com/jding490">
                                    <FaGithub className="nav-icon" size={30} />
                                </a>
                            </div>
                        </div>
                    <p>Connect With Me!</p>
                </div>
                <div className="footer-right">
                    <p>Built with React, TypeScript, & CSS/HTML</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;