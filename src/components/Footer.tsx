import { Link } from "react-router-dom"
import "../styles/Footer.css"

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="logo"><Link to="/"><span>PEARL </span>SOFTECH</Link></div>
            <div className='copy-right'>© 2025 Pearl Softech Pvt. Ltd. All rights reserved.</div>
            <div className="links">
                <a href="https://www.facebook.com/profile.php?id=61569672626784"><i className='fa-brands fa-facebook'></i></a>
                <a href="https://www.linkedin.com/company/pearl-softech/"><i className='fa-brands fa-linkedin'></i></a>
                <a href="https://github.com/pearl-softech"><i className='fa-brands fa-x-twitter'></i></a>
                <a href="https://x.com/pearl_soft01"><i className='fa-brands fa-github'></i></a>
            </div>
        </div>
    )
}

export default Footer