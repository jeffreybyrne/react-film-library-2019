import React from 'react';

const FilmRow = ({film}) => {

    return (
        <div className="film-row" >
            <figure className="film-poster">
            <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt="" />
            </figure>

            <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{new Date(film.release_date).getFullYear()}</p>
            </div>
        </div>
    )
};

export default FilmRow;