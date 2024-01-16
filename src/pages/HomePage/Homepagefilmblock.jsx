import React from 'react';
import './Homepagefilmblock.css';
import { films } from './films';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { likeFilm } from '../../Redux/actions';

const HomePageFilmBlock = () => {
    const likes = useSelector((state) => state.likes);
    const dispatch = useDispatch();

    const handleLikeClick = (filmIndex) => {
        dispatch(likeFilm(filmIndex));
    };

    return (
        <div className='film-block'>
            {films.map((film, index) => (
                <div key={index} className="film-block-content">
                    <img className='film-block-img' src={film.imgSrc} alt={`Film ${index + 1}`} />

                    <div className='block-button-like'>
                        <NavLink to={`/${film.scrForFilm}`} activeClassName="active">
                            <button className="button-link">
                                <h2>{film.title}</h2>
                            </button>
                        </NavLink>
                        <button className='button-like' onClick={() => handleLikeClick(index)}>
                            {likes.includes(index) ? (
                                <>
                                    <span role="img" aria-label="like">👍</span> {likes.filter((like) => like === index).length}
                                </>
                            ) : (
                                <span role="img" aria-label="like">👍</span>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HomePageFilmBlock;