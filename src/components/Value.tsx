import React, { useEffect } from 'react';
import "../styles/Value.css";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Value: React.FC = () => {
    useEffect(() => {
        // Select all value cards
        const values = document.querySelectorAll('.value');

        // Loop through each value card and apply scroll-triggered animation
        values.forEach((value, index) => {
            // Check if it's one of the first two cards
            const isFirstTwo = index < 2;
            // Check if it's one of the last two cards
            const isLastTwo = index >= 2;

            // Apply different animations based on card position
            gsap.fromTo(value,
                {
                    opacity: 0,
                    y: isFirstTwo ? -50 : (isLastTwo ? 50 : 0),  // First two from top, last two from bottom, others in the center
                },
                {
                    opacity: 1,  // Final opacity
                    y: 0,        // End position (original position)
                    duration: 0.6,
                    delay: index * 0.2, // Stagger the animation based on index
                    ease: 'power2.out',  // Smooth easing for the animation
                    scrollTrigger: {
                        trigger: value,    // Element to trigger the animation on
                        start: 'top 80%',   // Start when the element reaches 80% from the top of the viewport
                        end: 'top 20%',     // End when the element reaches 20% from the top of the viewport
                        toggleActions: 'play none none reverse',  // Reverse the animation when scrolling back up
                        markers: false,     // Disable markers for debugging
                    }
                });
        });
    }, []);

    return (
        <div className="value-container">
            <div className="header">OUR <span>VALUES</span></div>
            <div className="values">
                <div className="value">
                    <div className="icon"><i className="fa-solid fa-lightbulb"></i></div>
                    <div className="title">Innovation</div>
                    <div className="desc">Staying at the forefront of technology to keep you ahead of the competition.</div>
                </div>

                <div className="value">
                    <div className="icon"><i className="fa-solid fa-user-shield"></i></div>
                    <div className="title">Security</div>
                    <div className="desc">Implementing the highest standards of cybersecurity to protect your information.</div>
                </div>

                <div className="value">
                    <div className="icon"><i className="fa-solid fa-users-viewfinder"></i></div>
                    <div className="title">Customer Focus</div>
                    <div className="desc">Building strong relationships and delivering solutions that make a difference.</div>
                </div>

                <div className="value">
                    <div className="icon"><i className="fa-solid fa-heart"></i></div>
                    <div className="title">Integrity</div>
                    <div className="desc">Operating with honesty, transparency, and accountability in everything we do.</div>
                </div>
            </div>
        </div>
    );
}

export default Value;
