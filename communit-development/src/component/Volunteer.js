import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Volunteer.css';
import volunteerData from './volunteerData';

function Volunteer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        opportunity: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}, for signing up for ${formData.opportunity}!`);
        setFormData({
            name: '',
            email: '',
            opportunity: '',
        });
    };

    return (
        <div className="container">
            {/* Volunteer Opportunities */}
            <section className="volunteer-section my-4">
                <h2>Volunteer Opportunities</h2>
                <div className="list-group">
                    {volunteerData.map((opportunity) => (
                        <div key={opportunity.id} className="list-group-item">
                            <h5>{opportunity.title}</h5>
                            <p>{opportunity.description}</p>
                            <p>
                                <small>Date: {opportunity.date}</small><br />
                                <small>Time: {opportunity.time}</small><br />
                                <small>Location: {opportunity.location}</small>
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Volunteer Sign-Up Form */}
            <section className="signup-form my-4">
                <h2>Sign Up to Volunteer</h2>
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
                        <label htmlFor="opportunity">Select an Opportunity</label>
                        <select
                            className="form-control"
                            id="opportunity"
                            name="opportunity"
                            value={formData.opportunity}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select...</option>
                            {volunteerData.map((opportunity) => (
                                <option key={opportunity.id} value={opportunity.title}>
                                    {opportunity.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">
                        Sign Up
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Volunteer;
