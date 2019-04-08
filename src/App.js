import React from 'react';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
// import Fave from './Fave'
import TMDB from './TMDB';

const App = () => {
  return (
    <main className="film-library">
      <FilmListing films={TMDB.films} />
      <FilmDetails films={TMDB.films} />
      {/* <Fave /> */}
    </main>
  );
}

export default App;
