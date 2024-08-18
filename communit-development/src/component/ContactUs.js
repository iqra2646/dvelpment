import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'

function ContactUs() {
    const [formData, setFormData] = useState({
        name: ' Iqra dek ',
        email: 'iqralul9@gmail.com',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}, for your message! We'll get back to you soon.`);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="container">
            {/* Contact Form */}
            <section className="contact-form my-4">
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        Send Message
                    </button>
                </form>
            </section>

            {/* Map Section */}
            <section className="map-section my-4">
                <h2>Our Locations</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53086.21152419406!2d40.0348144366106!3d1.7479058053912396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x180c6fbe69f4fe9f%3A0x27edb07a63508c72!2sWajir%20County!5e0!3m2!1sen!2ske!4v1692466110118!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Wajir County Map"
                ></iframe>
            </section>
        </div>
    );
}

export default ContactUs;
