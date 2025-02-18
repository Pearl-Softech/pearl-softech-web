import { useEffect } from "react";
import "../styles/Team.css";
import gsap from "gsap";

import memberPhoto1 from "../assets/images/member/1.jpg";
import memberPhoto2 from "../assets/images/member/2.jpg";
import memberPhoto3 from "../assets/images/member/3.jpg";
import memberPhoto4 from "../assets/images/member/4.jpg";
import memberPhoto5 from "../assets/images/member/5.jpg";
import memberPhoto6 from "../assets/images/member/6.jpg";

const teamMembers = [
    {
        name: "Tilak Raj Bhandari",
        position: "CEO",
        image: memberPhoto1,
        socials: {
            facebook: "https://www.facebook.com/tilakraj.bhandari.5",
            linkedin: "",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Moti Kala Bhandari",
        position: "Founder",
        image: memberPhoto2,
        socials: {
            facebook: "https://www.facebook.com/moti.basnet.92",
            linkedin: "",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Rajesh Thapa",
        position: "Lead Developer",
        image: memberPhoto3,
        socials: {
            facebook: "#",
            linkedin: "https://www.linkedin.com/in/devrajeshthapa",
            twitter: "#",
            github: "https://github.com/devRajeshThapa",
        }
    },
    {
        name: "Nirajan Basnet",
        position: "Cyber Security & Digital Marketing",
        image: memberPhoto4,
        socials: {
            facebook: "https://www.facebook.com/profile.php?id=61563473620678",
            linkedin: "",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Rajan Naeupane",
        position: "Event & Program Director",
        image: memberPhoto5,
        socials: {
            facebook: "https://www.facebook.com/profile.php?id=61553572617056",
            linkedin: "#",
            twitter: "#",
            github: "",
        }
    },
    {
        name: "Yubraj Basyal",
        position: "Graphics & Video Editor",
        image: memberPhoto6,
        socials: {
            facebook: "",
            linkedin: "",
            twitter: "#",
            github: "#",
        }
    },
];

const Team = () => {
    useEffect(() => {
        // Animate each team member card one by one
        const cards = document.querySelectorAll(".team-card");

        gsap.fromTo(
            cards,
            { opacity: 0 }, // Initial opacity (invisible)
            {
                opacity: 1, // Final opacity (visible)
                duration: 1,
                stagger: 0.3, // Stagger delay (0.3s between each card)
                ease: "power1.out",
            }
        );
    }, []);

    return (
        <div className="team-container">
            <div className="title">
                OUR <span>TEAM</span>
            </div>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-card">
                        <div className="team-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="team-info">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <div className="socials">
                                {member.socials.facebook !== "#" && (
                                    <a href={member.socials.linkedin}><i className="fa-brands fa-facebook"></i></a>
                                )}
                                {member.socials.linkedin !== "#" && (
                                    <a href={member.socials.linkedin}><i className="fa-brands fa-linkedin"></i></a>
                                )}
                                {member.socials.twitter !== "#" && (
                                    <a href={member.socials.twitter}><i className="fa-brands fa-x-twitter"></i></a>
                                )}
                                {member.socials.github !== "#" && (
                                    <a href={member.socials.github}><i className="fa-brands fa-github"></i></a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
