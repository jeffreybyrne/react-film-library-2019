import React, {useState} from 'react';
import FilmRow from './FilmRow';

const FilmListing = ({films}) => {

    const [filter, setFilter] = useState('all');
    const filterClass = (filter === 'all' ? 'is-active' : 'faves');
    
    const filmRows = films.map(film => {
        return (
            <FilmRow film={film} key={film.id} />
        )
    });

    const handleFilterClick = (filter) => () => {
        console.log(`Setting filter to ${filter}`);
        setFilter(filter);
    };

    return (
        <div className="film-list">
            <h1 className="section-title">
                FILMS
            </h1>

            <div className={`film-list-filters ${filterClass}`}>
                <div className="film-list-filter"  onClick={handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{films.length}</span>
                </div>
                <div className="film-list-filter" onClick={handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
            {filmRows}
        </div>
    );
};

export default FilmListing;