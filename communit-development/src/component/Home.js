import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function HomePage() {
    return (
        <div className="container">
            {/* Introduction Section */}
            <section className="intro text-center my-5">
                <h1>Welcome to Community Connect</h1>
                <p>Your one-stop platform for connecting with resources, events, and volunteer opportunities in your community.</p>
            </section>

            {/* Carousel Section */}
            <section className="carousel-section">
                <div id="communityCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Community Event 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Community Event 1</h5>
                                <p>Description of the event.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Community Event 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Community Event 2</h5>
                                <p>Description of the event.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://via.placeholder.com/1200x400" className="d-block w-100" alt="Community Event 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Community Event 3</h5>
                                <p>Description of the event.</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#communityCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#communityCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="features my-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <h2>Resources</h2>
                        <p>Access valuable community resources.</p>
                        <button className="btn btn-primary">Explore Resources</button>
                    </div>
                    <div className="col-md-4">
                        <h2>Events</h2>
                        <p>Join upcoming community events.</p>
                        <button className="btn btn-primary">View Events</button>
                    </div>
                    <div className="col-md-4">
                        <h2>Volunteer</h2>
                        <p>Get involved and make a difference.</p>
                        <button className="btn btn-primary">Join Us</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
