import React, { useState } from "react";
import "../styles/Contact.css";

const Contact: React.FC = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const SERVER_IP = import.meta.env.VITE_SERVER_BACKEND_IP;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        sendMail();
    };

    const sendMail = async () => {
        setIsSubmitting(true);

        let payload = {
            companyName,
            companyEmail,
            companyPhoneNumber,
            subject,
            message
        };
        let options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': `${API_KEY}`
            },
            body: JSON.stringify(payload)
        };
        try {
            const res = await fetch(`${SERVER_IP}/business-mail`, options);
            const data = await res.json();
            console.log(data);
            if (data.type === "error") {
                setError(data.message);
                setSuccess(""); // Clear success message if there is an error
            } else {
                setError(""); // Clear error if request was successful
                setSuccess(data.message); // Set success message
                // Clear the form
                setCompanyName("");
                setCompanyEmail("");
                setCompanyPhoneNumber("");
                setSubject("");
                setMessage("");
                console.log("Mail sent successfully:", data);
            }
        } catch (error) {
            setError(`Failed to submit form: Internal server error`);
            setSuccess(""); // Clear success message if there is an error
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = () => {
        if (error) {
            setError(""); // Clear error when any input changes
        }
        if (success) {
            setSuccess(""); // Clear success message when any input changes
        }
    };

    return (
        <div className="contact-container">
            <div className="title"><span>CONTACT</span> US</div>
            {error && <div className="error"><i className="fa-solid fa-circle-xmark"></i> {error}</div>}
            {success && <div className="success"><i className="fa-solid fa-circle-check"></i> {success}</div>}
            <div className="content">
                {/* Form Section */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            placeholder="Company Name"
                            onChange={(e) => {
                                setCompanyName(e.target.value);
                                handleInputChange();
                            }}
                            required
                        />
                        <input
                            type="email"
                            id="companyEmail"
                            value={companyEmail}
                            placeholder="Business Email"
                            onChange={(e) => {
                                setCompanyEmail(e.target.value);
                                handleInputChange();
                            }}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            id="companyPhoneNumber"
                            value={companyPhoneNumber}
                            placeholder="Phone Number"
                            onChange={(e) => {
                                setCompanyPhoneNumber(e.target.value);
                                handleInputChange();
                            }}
                            required
                        />
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            placeholder="Subject"
                            onChange={(e) => {
                                setSubject(e.target.value);
                                handleInputChange();
                            }}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="message"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => {
                                setMessage(e.target.value);
                                handleInputChange();
                            }}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "SENDING MAIL..." : "SUBMIT"}
                    </button>
                </form>

                {/* Company Information Section */}
                <div className="company-info">
                    <div className="header">HEAD OFFICE</div>
                    <div className="body">
                        <div>Pearl Softech Pvt. Ltd.</div>
                        <div>Kathmandu, Buddhanagar</div>
                        <div className="contact">
                        <div><i className="fa-solid fa-phone"></i> 9704337901, 9857822532</div>
                        <div><i className="fa-solid fa-envelope"></i> pearlsoftechorg@gmail.com</div>
                        </div>
                        <div className="socials">
                            <a href="https://www.facebook.com/profile.php?id=61569672626784"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/company/pearl-softech/"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://x.com/pearl_soft01"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="https://github.com/pearl-softech"><i className="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Location Section */}
            <div className="location">
                <p className="location-title">
                OUR <span>LOCATION</span>
                </p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.80936314107623!2d85.32498122063028!3d27.687946067280514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9f5f88077%3A0x985bbdfe5871231!2sRosebud%20School%20Junior%20Block!5e0!3m2!1sen!2snp!4v1739374458360!5m2!1sen!2snp"
                    width="100%"
                    height="450"
                    style={{ borderRadius: "5px", border: "none" }}
                    title="Map Location"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;