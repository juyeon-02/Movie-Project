import React from 'react';

const MovieCard = ({ poster, title, rating }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <h2 className='제목'>{title}</h2>
      <h3 className='평점'>평점 : {rating}</h3>
    </div>
  );
};

export default MovieCard;
