import React, { useState, useEffect } from 'react';
import './Famousactors.css';

const Famousactors = () => {
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularActors = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=c4b2a80700871dc15f983a106dfb7c71');
                const data = await response.json();

                if (data.results && Array.isArray(data.results)) {
                    setActors(data.results);
                } else {
                    setError('Incorrect data from API');
                    setActors([]);
                }
            } catch (error) {
                setError('Error fetching data about popular actors');
            } finally {
                setLoading(false);
            }
        };

        fetchPopularActors();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="famousactors-container">
            {actors.map((actor) => (
                <div key={actor.id} className="famousactors-item">
                    <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={`${actor.name} photo`} />
                    <div>
                        <h3>{actor.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { Famousactors };