import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Event.css'
import eventsData from './EventData';

function Events() {
    const [filter, setFilter] = useState('All');

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredEvents = filter === 'All' ? eventsData : eventsData.filter(event => event.category === filter);

    return (
        <div className="container">
            {/* Filter Section */}
            <section className="filter-section my-4 text-center">
                <h2>Upcoming Events</h2>
                <div className="btn-group" role="group">
                    <button type="button" className={`btn ${filter === 'All' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilterChange('All')}>All</button>
                    <button type="button" className={`btn ${filter === 'Workshop' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilterChange('Workshop')}>Workshops</button>
                    <button type="button" className={`btn ${filter === 'Clean-Up Drive' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilterChange('Clean-Up Drive')}>Clean-Up Drives</button>
                    <button type="button" className={`btn ${filter === 'Educational Program' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => handleFilterChange('Educational Program')}>Educational Programs</button>
                </div>
            </section>

            {/* Events List */}
            <section className="events-list my-4">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map(event => (
                        <div key={event.id} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">Date: {event.date}</small>
                                    <br />
                                    <small className="text-muted">Category: {event.category}</small>
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No events found for this category.</p>
                )}
            </section>
        </div>
    );
}

export default Events;
