import React, { useEffect } from "react";
import "../styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    // Select all <li> elements inside .about-services, .about-values, .digital-marketing-services, and .platforms-served
    const liElements = document.querySelectorAll("ul li");

    // Animate each <li> from left to right on scroll
    gsap.fromTo(
      liElements,
      { opacity: 0, x: -100 }, // Initial state (off-screen to the left)
      {
        opacity: 1,              // Final state (fully visible)
        x: 0,                    // Final position (original position)
        duration: 0.6,
        ease: "power1.out",      // Ease for smooth transition
        stagger: 0.2,            // Stagger the animation slightly for each <li>
        scrollTrigger: {
          trigger: liElements,   // Element to trigger the animation on
          start: "top 80%",       // Start the animation when the element reaches 80% from the top of the viewport
          end: "top 10%",         // End the animation when the element reaches 10% from the top of the viewport
          toggleActions: "play none none reverse", // Reverse the animation when scrolling back up
          markers: false,         // Disable markers for debugging
          scrub: true,            // Smooth scrubbing effect when scrolling
        },
      }
    );
  }, []);

  return (
    <div className="about-container">
      <div className="about-title">
        <span>ABOUT</span> US
      </div>

      <div className="about-content">
        <div className="about-text">
          {/* ABOUT TEXT */}
          <section className="about-description">
            <p>
              Your trusted partner in Digital Marketing, Software Development, Cloud Services, Penetration
              Testing, and Cybersecurity. Our mission is to empower businesses and
              individuals by providing secure, scalable, and innovative solutions that
              help businesses thrive in the digital age.
            </p>
            <br />
            <p>
              "Empowering Innovation, Elevating Digital Success"<br />
              Pearl Softech Pvt. Ltd. operates at the intersection of technology and
              business growth, providing innovative solutions to enhance digital presence
              and operational efficiency.
            </p>
          </section>

          {/* JOURNEY SECTION */}
          <section className="about-journey">
            <h2>Our <span>Journey</span></h2>
            <p>
              Founded in 2025, Pearl Softech started with a vision to revolutionize the
              technology landscape. Over the years, we have grown into a leading provider
              of comprehensive tech solutions, serving clients across various industries.
            </p>
          </section>

          {/* SERVICES AND VALUES SECTION */}
          <div className="about-services-values">
            <section className="about-services">
              <h2>Our <span>Services</span></h2>
              <ul>
                <li>Digital Marketing</li>
                <li>Custom Software Development</li>
                <li>Cloud Services</li>
                <li>Cybersecurity Solutions</li>
              </ul>
            </section>

            <section className="about-values">
              <h2>Our <span>Values</span></h2>
              <ul>
                <li>Innovation</li>
                <li>Security</li>
                <li>Customer Focus</li>
                <li>Integrity</li>
              </ul>
            </section>
          </div>

          {/* DIGITAL MARKETING SERVICES */}
          <section className="digital-marketing-services">
            <h2>Digital Marketing <span>Services</span></h2>
            <ul>
              <li>Content Creation and Views Optimization</li>
              <li>Influence Campaigning</li>
              <li>Digital Profile Management</li>
            </ul>
          </section>

          {/* PLATFORMS SERVED SECTION */}
          <section className="platforms-served">
            <h2><span>Platforms</span> We Serve</h2>
            <ul>
              <li>Google (SEO)</li>
              <li>Webpages</li>
              <li>Facebook, Messenger, Page</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>Twitter (X)</li>
              <li>TikTok</li>
              <li>LinkedIn</li>
              <li>WhatsApp</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
