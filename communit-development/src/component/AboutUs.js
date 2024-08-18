import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

function AboutUs() {
    return (
        <div className="container">
            {/* Mission and Vision Section */}
            <section className="mission-vision text-center my-5">
                <h1>About Community Connect</h1>
                <p className="lead">Our Mission and Vision</p>
                <p>
                    At Community Connect, our mission is to bridge the gap between communities and resources, fostering growth, collaboration, and empowerment. 
                    We envision a world where every community thrives through access to the resources, events, and opportunities they need.
                </p>
            </section>

            {/* History Section */}
            <section className="history my-5">
                <h2>Our History</h2>
                <p>
                    Community Connect was founded in 2024 with a simple goal: to empower communities by providing them with the tools and resources they need 
                    to grow and prosper. Over the years, we have worked closely with local organizations, volunteers, and community leaders to develop initiatives 
                    that make a real impact. From organizing neighborhood clean-ups to hosting educational workshops, our efforts have brought people together 
                    and created lasting change.
                </p>
                <p>
                    Our platform continues to evolve, always striving to meet the needs of the communities we serve. We are committed to making a positive difference 
                    by connecting individuals with the opportunities and support they need to succeed.
                </p>
            </section>
        </div>
    );
}

export default AboutUs;
