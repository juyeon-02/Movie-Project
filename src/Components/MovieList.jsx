import { useEffect, useState } from 'react';
import MovieListData from '../data/MovieListData.json';
import MovieCard from './MovieCard';
import '../styles/MovieList.scss';

const MovieList = () => {
  
  const movieList = MovieListData.results;
  
  return (
    <div className="movie-list">
      {movieList.map((movie) => (
        <MovieCard
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.vote_average}
          key={movie.id}/>
      ))}
    </div>
  );
}

export default MovieList;
