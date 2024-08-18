import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources.css'
import resourcesData from './ResourcesData';

function Resources() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredResources = resourcesData.filter(resource =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            {/* Search Section */}
            <section className="search-section my-4 text-center">
                <h2>Available Resources</h2>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for resources..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </section>

            {/* Resources List */}
            <section className="resources-list my-4">
                {filteredResources.length > 0 ? (
                    filteredResources.map(resource => (
                        <div key={resource.id} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{resource.name}</h5>
                                <p className="card-text">{resource.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">Category: {resource.category}</small>
                                    <br />
                                    <small className="text-muted">Location: {resource.location}</small>
                                    <br />
                                    <small className="text-muted">Contact: {resource.contact}</small>
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No resources found matching your search.</p>
                )}
            </section>
        </div>
    );
}

export default Resources;
