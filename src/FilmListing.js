import React from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {
    const filmRows = films.map(film => {
        return (
            <FilmRow film={film} key={film.id} />
        )
    });

    const handleFaveClick = (filter) => () => {
        console.log(`Setting filter to ${filter}`)
    };

    return (
        <div className="film-list">
            <h1 className="section-title">
                FILMS
            </h1>

            <div className="film-list-filters">
                <div className="film-list-filter"  onClick={handleFaveClick('all')}>
                    ALL
                    <span className="section-count">{films.length}</span>
                </div>
                <div className="film-list-filter" onClick={handleFaveClick('faves')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
            {filmRows}
        </div>
    );
};

export default FilmListing;