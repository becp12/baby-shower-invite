import React, { useState } from "react";
import "./styles/main.css";
import ultrasoundImage from './images/20weekultrasoundnodetail.jpg';
import { jsx } from "react/jsx-runtime";
import emailjs from "emailjs-com";

function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        attending: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
        <div className="container">
            <div className="information">
                <section className="details">
                    <h1>Welcome to Bec's Baby Shower!</h1>
                    <p><b>Date:</b> Sunday, September 21st, 2025</p>
                    <p><b>Time:</b> 2:00 PM</p>
                    <p><b>Location:</b> Bec's House! If you need my address, just ask! We have plenty of parking room too.</p>
                    <p>I can't wait to celebrate with you!</p>
                </section>

                <section className="info">
                    <h2>Event Information</h2>
                    <p>
                        Join us for a fun afternoon filled with games, food, and laughter as
                        we celebrate the upcoming arrival of Bec's little one!
                    </p>
                    <p>
                        We will have a variety of games and activities including:
                        <ul>
                            <li>Decorate a Onesie</li>
                            <li>Guess The Baby Food</li>
                            <li>Guess The Baby</li>
                        </ul>
                    </p>
                    <p>
                        Please bring along a baby photo of yourself for the <i>Guess The Baby</i> game!
                    </p>
                    <p>
                        We will also be doing a <i>Guess The Due Date</i> game so if you would like to participate in that please bring some cash. The person who's guess is closest to the date and time will win the pool.</p>
                    <p>
                        Your company is the real celebration. Gifts are welcome but never expected.
                    </p>

                </section>
            </div>

            <div className="rsvp-box">
                <section className="rsvp">
                    <h2>RSVP</h2>
                    <p><center>Please RSVP by Sunday September 14th</center></p>
                    {submitted ? (
                        <p>Thank you for your RSVP!</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
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
                                <option value="">Will you attend?</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <textarea
                                name="message"
                                placeholder="Leave a message (optional, e.g. dietary restrictions, other special accomodations)"
                                value={form.message}
                                onChange={handleChange}
                            />
                            <button type="submit">Submit RSVP</button>
                        </form>
                    )}
                </section>
                <img src={ultrasoundImage} />
            </div>

        </div>
    );
}

export default App;