import React, { useState, useEffect } from 'react';
import './Famousactors.css';

export const Famousactors = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        const fetchPopularActors = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=c4b2a80700871dc15f983a106dfb7c71');
                const data = await response.json();

                if (data.results && Array.isArray(data.results)) {
                    setActors(data.results);
                } else {
                    console.error('Некорректные данные от API:', data);
                    setActors([]);
                }
            } catch (error) {
                console.error('Ошибка при получении данных о популярных актерах:', error);
            }
        };

        fetchPopularActors();
    }, []);

    return (
        <div className="famousactors-container">
            {actors.map((actor) => (
                <div key={actor.id} className="famousactors-item">
                    <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
                    <div>
                        <h3>{actor.name}</h3>
                        {/* Добавьте другие детали актера, которые вам нужны */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Famousactors;