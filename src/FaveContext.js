import React from 'react';

const FaveContext = React.createContext({
  faves: [],
  toggleFave: () => {},
  toggleCurrentFilm: () => {},
  currentFilm: {}
});

export default FaveContext;