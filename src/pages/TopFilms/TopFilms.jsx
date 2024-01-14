import React, { useState, useEffect } from 'react';
import './TopFilms.css'

const API_KEY = 'c4b2a80700871dc15f983a106dfb7c71';

const TopFilms = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTopMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                console.error('Ошибка при получении топовых фильмов:', error);
            }
        };

        fetchTopMovies();
    }, []);

    return (
        <div className="container">
            {movies.map((movie) => (
                <div key={movie.id} className="movie">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <div>
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export { TopFilms };