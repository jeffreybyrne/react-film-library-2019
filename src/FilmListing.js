import React, {useContext, useState} from 'react';
import TMDB from './TMDB'
import FilmRow from './FilmRow';
import FaveContext from './FaveContext';

const FilmListing = () => {
  const favesFromContext = useContext(FaveContext);
  const [filter, setFilter] = useState('all');
  
  const handleFilterToggle = (filter) => {
    console.log(`Setting filter to ${filter}`);
    setFilter(filter);
  }

  const films = filter === 'faves' ? favesFromContext.faves : TMDB.films

  const filmRows = films.map((film) => {
    return (
      <FilmRow film={film} key={film.id} isFave={favesFromContext.faves.includes(film)} />
    );
  });




  return (
    <section className="film-list">
      <h1 className="section-title">FILMS</h1>

      <nav className="film-list-filters">
        <button className="film-list-filter" onClick={() => handleFilterToggle('all')}>
          ALL
          <span className="section-count">{TMDB.films.length}</span>
        </button>
        <button className="film-list-filter" onClick={() => handleFilterToggle('faves')}>
          FAVES
          <span className="section-count">{favesFromContext.faves.length}</span>
        </button>
      </nav>

      {filmRows}
    </section>
  );
};

export default FilmListing;