import React from 'react';

const MovieCard = ({ poster, title, rating }) => {

  return (
    <div style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px' }}>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>평점: {rating}</p>
    </div>
  );

};

export default MovieCard;
