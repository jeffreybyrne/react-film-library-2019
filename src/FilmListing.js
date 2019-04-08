import React from 'react';

const FilmListing = ({films}) => {
const filmTitles = films.map(film => {
    return (
    <h1 key={film.id}>{film.title}</h1>
    )
})
    console.log(filmTitles)
    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
            {filmTitles}
        </div>
    )
}

export default FilmListing;