import React, { useState } from "react";
import "./styles/main.css";
import ultrasoundImage from './images/20weekultrasoundnodetail.jpg';
import bear from './images/lavender-bear-flipped.png';
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";


function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        attending: "",
        message: "",
    });

    const [captcha, setCaptcha] = useState(null);


    const [submitted, setSubmitted] = useState(false);

    const handleCaptcha = (value) => {
        setCaptcha(value);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captcha) {
            alert("Please complete the captcha.");
            return;
        }
        emailjs.send(
            "service_690cmab",
            "template_5f9nfgi",
            form,
            "8Aqmn5HmZ_WabOmt6"
        ).then(
            (result) => {
                setSubmitted(true);
            },
            (error) => {
                alert("Failed to send RSVP. Please try again.");
            }
        );
    };


    return (
        <div className="main-bg">
            <div className="header-row">
                <div className="header-center">
                    <img src={bear} alt="Bear" className="header-bear" />
                    <h1 className="main-title">You're invited to Bec's Baby Shower!</h1>
                </div>
            </div>

            <div className="content-row">
                <div className="event-info">
                    <h2 className="event-title">Event Information</h2>
                    <p>📆 2:00PM, Sunday, September 21st, 2025</p>
                    <p>📌 Bec's House! If you need my address, just ask! We have plenty of parking room too</p>
                    <p>🌈 The color theme is Pastel Rainbow</p>
                    <p>I can't wait to celebrate with you! 🎈</p>
                    <p>
                        Join us for a fun afternoon filled with games, food, and laughter as
                        we celebrate the upcoming arrival of Bec's little one!
                    </p>
                    <p>
                        We will have a variety of games and activities including:
                    </p>
                    <ul>
                        <li>Decorate a Onesie</li>
                        <li>Guess the Baby Food</li>
                        <li>Guess The Baby</li>
                    </ul>
                    <p>Please bring along a baby photo of yourself for the <i>Guess The Baby</i> game!</p>
                    <p>
                        We will also be doing a <i>Guess The Due Date</i> game so if you would like to participate in that, please bring some cash. The person who's guess is closest to the date and time will win the pool.</p>


                    <section className="registry">
                        <h2 className="rsvp-title">🎁 Registry</h2>
                        <p>
                            Your company is the real celebration. Gifts are welcome but never expected.
                            For those who’ve asked, here’s our baby registry:
                        </p>
                        {/* <button className="rsvp-btn"> */}
                        <a href="https://registry.whattoexpect.com/baby-registry/baby-preece" target="_blank" className="registry-btn">View Our Registry</a>
                        {/* </button> */}

                    </section>


                </div>

                <div className="rsvp-section">
                    <h2 className="rsvp-title">RSVP</h2>
                    <p className="rsvp-deadline">Please RSVP by Sunday September 14th</p>
                    {submitted ? (
                        <p>Thank you for your RSVP!</p>
                    ) : (
                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                            <select
                                name="attending"
                                value={form.attending}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Will you be attending?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <textarea
                                name="message"
                                placeholder="Leave a message (optional, e.g. dietary restrictions, other special accomodations)"
                                value={form.message}
                                onChange={handleChange}
                            />
                            <div className="recaptcha-container">
                                <ReCAPTCHA 
                                    sitekey="6Ldb4cIrAAAAAEDKtT9Qb7ypNRfgGQctOCBLJmRx"
                                    onChange={handleCaptcha}
                                />
                            </div>
                            <button type="submit" className="rsvp-btn">Send RSVP</button>
                        </form>
                    )}
                    <img src={ultrasoundImage} alt="20 week ultrasound" className="ultrasound-img" />
                </div>
            </div>
        </div>
    );
}

export default App;