import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/About.css";
import journeyPicture from "../assets/images/journey.png";

const About = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll("li");
    gsap.fromTo(
      listItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className="about-container">
      <div className="header"><span>ABOUT</span> US</div>
      <div className="content">
        <div className="first-row">
          <div className="left">
            <p>Welcome to <strong>Pearl Softech Pvt. Ltd.</strong>, your trusted partner in software development, cloud services, penetration testing, and cybersecurity. Our mission is to empower businesses and individuals by providing secure, scalable, and innovative solutions that help businesses thrive in the digital age.</p>
            <br />
            <p><strong>“Empowering Innovation, Elevating Digital Success”</strong><br />
              Pearl Softech Pvt. Ltd. operates at the intersection of technology and business growth, providing innovative solutions to enhance digital presence and operational efficiency.
            </p>
          </div>
          <div className="right">
            <div className="title">OUR <span>JOURNEY</span></div>
            <div className="content">
              <div className="left-content">
                <img src={journeyPicture} alt="" />
              </div>
              <div className="right-content">
                Founded in 2025, Pearl Softech started with a vision to revolutionize the technology landscape. Over the years, we have grown into a leading provider of comprehensive tech solutions, serving clients across various industries. Our commitment to innovation and excellence has been the driving force behind our success.
              </div>
            </div>
          </div>
        </div>
        <div className="second-row">
          <div className="services">
            <div className="title"><span>DIGITAL MARKETING</span> SERVICES</div>
            <ul>
              <li><span className="primary-color">&gt;</span> Influence Campaigning</li>
              <li><span className="primary-color">&gt;</span> Digital Profile Management</li>
            </ul>
          </div>
          <div className="platform">
            <div className="title"><span>PLATFORM</span> WE SERVE</div>
            <ul>
              <li><span className="primary-color">&gt;</span> Google (SEO)</li>
              <li><span className="primary-color">&gt;</span> Webpages</li>
              <li><span className="primary-color">&gt;</span> Facebook/Messenger/Page</li>
              <li><span className="primary-color">&gt;</span> YouTube</li>
              <li><span className="primary-color">&gt;</span> Instagram</li>
              <li><span className="primary-color">&gt;</span> Twitter (X)</li>
              <li><span className="primary-color">&gt;</span> TikTok</li>
              <li><span className="primary-color">&gt;</span> LinkedIn</li>
              <li><span className="primary-color">&gt;</span> WhatsApp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
