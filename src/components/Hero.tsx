import "../styles/Hero.css"
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>EMPOWER, SECURE AND INNOVATE</h1>
                <p>Your Trusted Partner for Digital Marketing, Cloud, Software, and Cybersecurity Solutions. Providing innovative solutions to enhance digital presence, optimize operational efficiency</p>
            </div>
            <div className="buttons">
                <Link to={"/contact"}><p className='join-btn'>JOIN US</p></Link>
                <Link to={"/about"}><p className='about-btn'>ABOUT US</p></Link>
            </div>
        </div>
    )
}

export default Hero