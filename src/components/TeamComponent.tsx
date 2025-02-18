import React, { useEffect } from 'react';
import "../styles/TeamComponent.css";
import homeTeam from "../assets/images/home-team.jpeg";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TeamComponent: React.FC = () => {
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
        ease: "power1.out",
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
        ease: "power1.out",
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
    <div className="team-component-container">
      <div className="title">
        OUR <span>TEAM</span>
      </div>
      <div className="wrapper">
        <div className="left">
          <div className="content">
            <div className="body">
            Our team is a passionate group of experts, each with their own specialized skills, working together to deliver innovative solutions. From visionary leadership to hands-on technical expertise, we empower businesses to succeed in the digital world.
            </div>
            <div className="button">
              <Link to={"/team"}>VIEW MEMBERS</Link>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={homeTeam} alt="About" />
        </div>
      </div>
    </div>
  );
};

export default TeamComponent;
