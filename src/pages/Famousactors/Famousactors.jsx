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
                    setError('Некоректні дані від API');
                    setActors([]);
                }
            } catch (error) {
                setError('Помилка при отриманні даних про популярних акторів');
            } finally {
                setLoading(false);
            }
        };

        fetchPopularActors();
    }, []);

    if (loading) {
        return <p>Завантаження...</p>;
    }

    if (error) {
        return <p>Сталася помилка: {error}</p>;
    }

    return (
        <div className="famousactors-container">
            {actors.map((actor) => (
                <div key={actor.id} className="famousactors-item">
                    <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={`${actor.name} фото`} />
                    <div>
                        <h3>{actor.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { Famousactors };