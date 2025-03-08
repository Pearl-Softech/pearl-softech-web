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
        position: "Advisor",
        image: memberPhoto1,
        socials: {
            facebook: "https://www.facebook.com/tilakraj.bhandari.5",
            linkedin: "https://www.linkedin.com/in/tilak-raj-bhhandari-b5049334b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
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
            linkedin: "#",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Yubraj Basyal",
        position: "Chief Digital Officer",
        image: memberPhoto3,
        socials: {
            facebook: "",
            linkedin: "",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Nirajan Basnet",
        position: "Director of Engineering",
        image: memberPhoto4,
        socials: {
            facebook: "https://www.facebook.com/profile.php?id=61563473620678",
            linkedin: "https://www.linkedin.com/in/nirajan-basnet-b3526b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            twitter: "#",
            github: "#",
        }
    },
    {
        name: "Rajan Naeupane",
        position: "Chief Innovation Officer",
        image: memberPhoto5,
        socials: {
            facebook: "https://www.facebook.com/profile.php?id=61553572617056",
            linkedin: "https://www.linkedin.com/in/rajan-neupane-598191312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            twitter: "#",
            github: "",
        }
    },
    {
        name: "Rajesh Thapa",
        position: "Lead Developer",
        image: memberPhoto6,
        socials: {
            facebook: "#",
            linkedin: "https://www.linkedin.com/in/devrajeshthapa",
            twitter: "#",
            github: "https://github.com/devRajeshThapa",
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
