import React, { useState, useEffect, useRef } from 'react';
import "../styles/Hero.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero: React.FC = () => {
    // State for numbers
    const [customerCount, setCustomerCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [yearCount, setYearCount] = useState(0);

    // Function to increment the numbers dynamically
    const increaseNumbers = (target: number, setValue: React.Dispatch<React.SetStateAction<number>>) => {
        let count = 0;
        const increment = target / 100;  // Number of increments
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                clearInterval(interval);
                setValue(target);  // Ensure the value is set to the final number
            } else {
                setValue(Math.floor(count));
            }
        }, 30);
    };

    // Animation function for hero text
    const heroTextRef = useRef<HTMLHeadingElement | null>(null);

    const revealText = () => {
        if (heroTextRef.current) {
            const text = heroTextRef.current;
            const words = text.textContent?.split(' ') || [];
            text.textContent = ''; // Empty the text content
    
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.textContent = word + ' '; // Add space after each word
                text.appendChild(span);
    
                // Apply color to "SECURE" and "INNOVATE"
                if (word === 'SECURE' || word === 'INNOVATE') {
                    span.style.color = 'var(--primary-color)';
                }
    
                gsap.fromTo(span, {
                    opacity: 0,
                    y: 50,
                }, {
                    opacity: 1,
                    y: 0,
                    delay: index * 0.9,
                    duration: 1,
                    ease: 'power2.out',
                });
            });
        }
    };
    

    // Start the animation when the component is mounted
    useEffect(() => {
        increaseNumbers(20, setCustomerCount);  // Example: 1200 customers
        increaseNumbers(18, setProjectCount);    // Example: 500 projects
        increaseNumbers(2, setYearCount);        // Example: 15 years in business

        revealText(); // Trigger the reveal animation
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1 ref={heroTextRef}>EMPOWER, SECURE AND INNOVATE</h1>
                <br />
                <p>Your Trusted Partner for Digital Marketing, Cloud, Software, and Cybersecurity Solutions. Providing innovative solutions to enhance digital presence, optimize operational efficiency</p>
            </div>

            {/* Buttons */}
            <div className="buttons">
                <Link to={"/contact"}><p className='join-btn'>JOIN US</p></Link>
                <Link to={"/about"}><p className='about-btn'>ABOUT US</p></Link>
            </div>

            <br />

            {/* Additional Number Sections */}
            <div className="numbers-section">
                <div className="number-item">
                    <h2>{customerCount + "+"}</h2>
                    <p>Customers</p>
                </div>
                <div className="number-item">
                    <h2>{projectCount + "+"}</h2>
                    <p>Projects Completed</p>
                </div>
                <div className="number-item">
                    <h2>{yearCount + "+"}</h2>
                    <p>Years in Business</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
