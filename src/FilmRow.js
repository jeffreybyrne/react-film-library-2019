import React, {useContext} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
import FaveContext from './FaveContext';

const FilmRow = ({film, isFave}) => {
  const faveContext = useContext(FaveContext);

  const handleDetailsClick = (event) => {
    faveContext.toggleCurrentFilm(film);
  }

  return (
    <article className="film-row" onClick={handleDetailsClick}>
      <FilmPoster film={film} />
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date(film.release_date).getFullYear()}</p>
      </div>

      <Fave isFave={isFave} onToggle={() => faveContext.toggleFave(film)} />
    </article>
  );
};

export default FilmRow;