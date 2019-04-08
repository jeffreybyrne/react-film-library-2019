import React from 'react';
import FilmPoster from './FilmPoster';

const FilmRow = ({film}) => {

    return (
        <div className="film-row" >
            <FilmPoster film={film} key={film.id} />

            <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{new Date(film.release_date).getFullYear()}</p>
            </div>
        </div>
    )
};

export default FilmRow;