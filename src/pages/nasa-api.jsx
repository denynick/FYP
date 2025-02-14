import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faVolcano, faCloudRain, faHouseCrack } from '@fortawesome/free-solid-svg-icons'; // Import storm icon
import Card from '../components/Card';

const NasaApi = () => {
    const { user, logout } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All'); // Add filter state

    const fetchEvents = async () => {
        try {
            const response = await axios.get('https://eonet.gsfc.nasa.gov/api/v3/events');
            conasole.log(setEvents(response.data.events));
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchEvents();
    }, []);

    if (loading) {
        return <p>Loading events...</p>;
    }

    if (error) {
        return <p>Error fetching events: {error}</p>;
    }

    // Filtering logic
    const filteredEvents = events.filter(event => {
        if (filter === 'All') return true;
        return event.categories.some(category => category.title === filter);
    });

    return (
        <>
            <h1>Recent Natural Events</h1>
            <label>
                Filter by Type:
                <select onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Earthquakes">Earthquakes</option>
                    <option value="Wildfires">Wildfires</option>
                    <option value="Severe Storms">Severe Storms</option>
                    <option value="Volcanoes">Volcanoes</option>
                </select>
            </label>
            <ul>
                {filteredEvents.map((event) => (
                    <li key={event.id}>
                        <h2>
                            {event.title}
                            {event.categories.some(category => category.title === 'Earthquakes') && (
                                <FontAwesomeIcon icon={faHouseCrack} style={{ marginLeft: '5px', color: 'brown' }} />
                            )}

                            {event.categories.some(category => category.title === 'Wildfires') && (
                                <FontAwesomeIcon icon={faFire} style={{ marginLeft: '5px', color: 'red' }} />
                            )}
                            {event.categories.some(category => category.title === 'Severe Storms') && (
                                <FontAwesomeIcon icon={faCloudRain} style={{ marginLeft: '5px', color: 'blue' }} />
                            )}
                            {event.categories.some(category => category.title === 'Volcanoes') && (
                                <FontAwesomeIcon icon={faVolcano} style={{ marginLeft: '5px', color: 'orange' }} />
                            )}
                        </h2>
                        {event.geometry && event.geometry.length > 0 ? (
                            <>
                                <p>Date: {new Date(event.geometry[0].date).toLocaleDateString()}</p>
                                {event.geometry[0].coordinates && (
                                    <p>Coordinates: {event.geometry[0].coordinates.join(', ')}</p>
                                )}
                                {event.geometry[0].magnitudeValue && (
                                    <p>
                                        Magnitude: {event.geometry[0].magnitudeValue} {event.geometry[0].magnitudeUnit}
                                    </p>
                                )}
                            </>
                        ) : (
                            <p>Date information is not available for this event.</p>
                        )}
                        <p>Type: {event.categories.map(category => category.title).join(', ')}</p>
                        <p>Description: {event.description || 'No description available.'}</p>
                        <a href={event.link} target="_blank" rel="noopener noreferrer">More Info</a>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default NasaApi;
