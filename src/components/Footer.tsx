import "../styles/Footer.css"

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="logo"><span>PEARL </span>SOFTECH</div>
            <div className='copy-right'>© 2025 Pearl Softech Pvt. Ltd. All rights reserved.</div>
            <div className="links">
                <a href=""><i className='fa-brands fa-facebook'></i></a>
                <a href=""><i className='fa-brands fa-linkedin'></i></a>
                <a href=""><i className='fa-brands fa-x-twitter'></i></a>
                <a href=""><i className='fa-brands fa-github'></i></a>
            </div>
        </div>
    )
}

export default Footer