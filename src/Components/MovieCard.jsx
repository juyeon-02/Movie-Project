import React from 'react';
import MovieListData from '../data/MovieListData.json'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ poster_path, title, rating }) => {

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '10px' }}>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} style={{ width: '100%' }} />
      <h3>{title}</h3>
      <p>평점: {rating}</p>
    </div>
  );
};

export default MovieCard;
