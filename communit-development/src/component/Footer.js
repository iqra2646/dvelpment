import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>Community development is dedicated to bringing people together and supporting local initiatives. We strive to make a positive impact in our community through various programs and events.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home" className="text-white">Home</a></li>
                            <li><a href="/events" className="text-white">Events</a></li>
                            <li><a href="/resources" className="text-white">Resources</a></li>
                            <li><a href="/volunteer" className="text-white">Volunteer</a></li>
                            <li><a href="/contact" className="text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>123 Community Lane<br />Townsville, 14731399<br />Phone: +25-47-26-46-57-47<br />Email: iqralukl9@gmail.com</p>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Community development. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
