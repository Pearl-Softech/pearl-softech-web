import React, { useEffect } from 'react';
import "../styles/Service.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Service: React.FC = () => {
    useEffect(() => {
        // Select all service cards
        const services = document.querySelectorAll('.service');

        // Loop through each service card and apply scroll-triggered animation
        services.forEach((service, index) => {
            // For the first two cards, animate from the left, for the next two from the right
            const direction = index < 2 ? -100 : 100;  // Left (-100) for first 2 cards, Right (100) for next 2 cards

            gsap.fromTo(service,
                { opacity: 0, x: direction },  // Initial state (off-screen and invisible)
                {
                    opacity: 1,                 // Final state (fully visible)
                    x: 0,                       // Final position (original position)
                    duration: 0.6,              // Animation duration
                    delay: index * 0.2,         // Stagger animation based on index
                    ease: 'power1.out',         // Easing for the animation
                    scrollTrigger: {
                        trigger: service,      // Element to trigger the animation on
                        start: 'top 80%',       // Start when the element reaches 80% from the top of the viewport
                        end: 'top 20%',         // End when the element reaches 20% from the top of the viewport
                        toggleActions: 'play none none reverse',  // Reverse the animation when scrolling back up
                        markers: false,         // Disable markers for debugging
                    }
                });
        });
    }, []);

    return (
        <div id="services" className="service-container">
            <div className="header">OUR <span>SERVICES</span></div>
            <div className="services">
                <div className="service">
                    <div className="icon"><i className="fa-solid fa-rocket"></i></div>
                    <div className="title">Digital Marketing</div>
                    <div className="desc">Data-driven strategies to enhance your digital presence.</div>
                </div>

                <div className="service">
                    <div className="icon"><i className="fa-solid fa-code"></i></div>
                    <div className="title">Software Development</div>
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
    );
};

export default Service;
