import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave'

const FilmRow = ({film}) => {

    const handleDetailsClick = (film) => () => {
        console.log(`Getting details for ${film.title}`)
        // console.log(film)
    }

    return (
        <div className="film-row" onClick={handleDetailsClick(film)}>
            <FilmPoster film={film} key={film.id} />

            <div className="film-summary">
            <h1>{film.title}</h1>
            <p>{new Date(film.release_date).getFullYear()}</p>
            </div>
            <Fave />
        </div>
    )
};

export default FilmRow;