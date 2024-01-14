import React from 'react';
import './Homepagefilmblock.css';
import { films } from './films';
import { NavLink } from 'react-router-dom';


const HomePageFilmBlock = () => {
    return (
        <div className='film-block'>
            {films.map((film, index) => (
                <div key={index} className="film-block-content">
                    <img className='film-block-img' src={film.imgSrc} alt={`Film ${index + 1}`} />
                    <button className="button-link">
                        <NavLink to={`/${film.scrForFilm}`} activeClassName="active">
                            <h2>{film.title}</h2>
                        </NavLink>
                    </button>
                </div>
            ))}
        </div>
    );
};

export default HomePageFilmBlock;