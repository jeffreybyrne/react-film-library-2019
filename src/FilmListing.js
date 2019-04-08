import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
const filmRows = films.map(film => {
    return (
        <FilmRow film={film} key={film.id} />
        // <div className="film-row" key={film.id}>
        //     <figure className="film-poster">
        //     <img src={`https://image.tmdb.org/t/p/w780${film.poster_path}`} alt="" />
        //     </figure>
    
        //     <div className="film-summary">
        //     <h1>{film.title}</h1>
        //     <p>{new Date(film.release_date).getFullYear()}</p>
        //     </div>
        // </div>
    )
})

    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
            {filmRows}
        </div>
    )
}

export default FilmListing;