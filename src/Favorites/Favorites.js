import React from 'react';
import propTypes from 'prop-types';
import './Favorites.css';

export const Favorites = (props) => {
  
  const showDogs = () => {
    if(props.savedDogs.length) {
      return props.savedDogs.map((dog, i) => {
        return <img src={dog} className="dog-image" key={i} data-testid={`test-${i}`} alt='random-dog'></img>
      })
    } else {
      return
    }
  }

  return (
    <div className="favorites" data-testid='favorites'>
      {showDogs()}
    </div>
  )
}

Favorites.propTypes = {
  savedDogs: propTypes.array
}