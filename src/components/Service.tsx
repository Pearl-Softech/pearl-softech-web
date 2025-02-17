import "../styles/Service.css"

const Service: React.FC = () => {
    return (
        <div className="service-container">
            <div className="header">OUR <span>SERVICES</span></div>
            <div className="services">
                <div className="service">
                    <div className="icon"><i className="fa-solid fa-rocket"></i></div>
                    <div className="title">Digital Marketing</div>
                    <div className="desc">Data-driven strategies to enhance your digital presence.</div>
                </div>

                <div className="service">
                    <div className="icon"><i className="fa-solid fa-code"></i></div>
                    <div className="title">Sotware Development</div>
                    <div className="desc">Custom software solutions for web, mobile, and enterprise.</div>
                </div>

                <div className='service'>
                    <div className="icon"><i className="fa-solid fa-cloud"></i></div>
                    <div className="title">Cloud Services</div>
                    <div className="desc">Migrate, manage, and optimize your cloud infrastructure.</div>
                </div>

                <div className='service'>
                    <div className="icon"><i className="fa-solid fa-shield-halved"></i></div>
                    <div className="title">Cyber Security</div>
                    <div className="desc">Penetration testing and robust security solutions.</div>
                </div>
            </div>
        </div>
    )
}

export default Service