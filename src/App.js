import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

const App = () => {
  return (
    <main className="film-library">
      <FilmListing films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
    </main>
  );
}

export default App;
