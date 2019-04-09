import React from 'react';

const Fave = ({isFave, onToggle}) => {
  const handleClick = (event) => {
    event.stopPropagation();
    console.log('Handling Fave click!');

    onToggle();
  };

  const faveClass = isFave ? 'remove_from_queue' : 'add_to_queue';

  return (
    <button className={`film-row-fave ${faveClass}`} onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </button>
  );
};

export default Fave;