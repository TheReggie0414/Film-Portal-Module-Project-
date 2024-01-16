import React, { useState, useEffect } from 'react';
import './Moviedetails.css';

const Marvels = () => {
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [images, setImages] = useState([]);
    const maxCastMembers = 8;
    const maxImages = 3;

    const movieId = '609681';
    const apiKey = 'c4b2a80700871dc15f983a106dfb7c71';

    const fetchMovieDetails = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-EN`);
            const data = await response.json();
            setMovie(data);

            const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);
            const castData = await castResponse.json();
            setCast(castData.cast.slice(0, maxCastMembers));

            const imagesResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
            const imagesData = await imagesResponse.json();
            setImages(imagesData.backdrops.slice(0, maxImages));

            const trailersResponse = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`);
            const trailersData = await trailersResponse.json();
            setTrailers(trailersData.results.filter((video) => video.type === 'Trailer'));
        } catch (error) {
            console.error('Error fetching movie information:', error);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    return (
        <div className="movie-details-container">
            {movie && (
                <div className='main-block-div'>

                    <div className='movie-block-info'>

                        <img className="movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Poster" />


                        <div className='movie-block-film-info'>
                            <h1>{movie.title}</h1>
                            <div className="movie-info">
                                <p>{movie.overview}</p>
                                <p className='rating'>Rating: {movie.vote_average}</p>
                            </div>


                            <h3 className='h3-cast'>The cast:</h3>
                            <div className="cast-container">

                                <div className="cast-list">
                                    {cast.map((actor) => (
                                        <div key={actor.id} className="actor-card">
                                            <img src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt={`${actor.name} profile`} className="actor-image" />
                                            <p className="actor-name">{actor.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="images-container">
                        <h3>Frames from the movie:</h3>
                        <div className="images-list">
                            {images.map((image) => (
                                <img key={image.file_path} src={`https://image.tmdb.org/t/p/original${image.file_path}`} alt="Backdrop" className="movie-image" />
                            ))}
                        </div>

                    </div>

                    <div className="trailers-container">
                        <h3>Trailers:</h3>
                        <div className="trailers-list">
                            {trailers.map((trailer) => (
                                <iframe key={trailer.id} title="Trailer" width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} frameBorder="0" allowFullScreen></iframe>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Marvels };