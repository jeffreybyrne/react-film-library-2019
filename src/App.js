import React, {useState} from 'react';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FaveContext from './FaveContext';
import FilmDetails from './FilmDetails';
import axios from 'axios';

const App = () => {
  const {films} = TMDB;

  const [faves, setFaves] = useState([]);
  const [currentFilm, setCurrentFilm] = useState();


  const handleFaveToggle = (film) => {
    const favesCopy = faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex > -1) {
      console.log(`Removing ${film.title} from faves`);
      favesCopy.splice(filmIndex, 1);
      setFaves(favesCopy);
    } else {
      console.log(`Adding ${film.title} to faves`);
      setFaves([...favesCopy, film]);
    }
  }

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film}`);
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios.get(url).then(response => {
        console.log(response.data)
        setCurrentFilm(response.data)
    })
  }

  return (
    <main className="film-library">
      <FaveContext.Provider value={{faves: faves, toggleFave: handleFaveToggle, toggleCurrentFilm: handleDetailsClick, currentFilm: currentFilm}}>
        <FilmListing films={films} />

        <section className="film-details">
          <h2 className="section-title">DETAILS</h2>
          <FilmDetails />
        </section>
      </FaveContext.Provider>
    </main>
  );
}

export default App;
