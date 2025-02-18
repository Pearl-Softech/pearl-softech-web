import React, { useEffect } from 'react';
import "../styles/AboutComponent.css";
import homeAbout from "../assets/images/home-about.webp";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutComponent: React.FC = () => {
  useEffect(() => {
    // Select the left and right elements
    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    // Animate the left section to slide in from the left
    gsap.fromTo(left, 
      { opacity: 0, x: 200 }, // Start off-screen to the left
      {
        opacity: 1,             // Fade in
        x: 0,                   // End at its normal position
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: left,
          start: "top 80%",     // Start animation when element reaches 80% from the top
          end: "top 20%",       // End animation when element reaches 20% from the top
          toggleActions: "play none none reverse",  // Reverse animation on scroll up
          markers: false        // Disable markers for debugging
        }
      });

    // Animate the right section to slide in from the right
    gsap.fromTo(right, 
      { opacity: 0, x: -200 }, // Start off-screen to the right
      {
        opacity: 1,             // Fade in
        x: 0,                   // End at its normal position
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: right,
          start: "top 80%",     // Start animation when element reaches 80% from the top
          end: "top 20%",       // End animation when element reaches 20% from the top
          toggleActions: "play none none reverse",  // Reverse animation on scroll up
          markers: false        // Disable markers for debugging
        }
      });
  }, []);

  return (
    <div className="about-component-container">
      <div className="title">
        <span>ABOUT</span> US
      </div>
      <div className="wrapper">
        <div className="right">
          <img src={homeAbout} alt="About" />
        </div>
        <div className="left">
          <div className="content">
            <div className="body">
              Your trusted partner in Digital Marketing, Software Development, Cloud Services, Penetration Testing, and Cybersecurity. Our mission is to empower businesses and individuals by providing secure, scalable, and innovative solutions that help businesses thrive in the digital age.
            </div>
            <div className="button">
              <Link to={"/about"}>LEARN MORE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
