import MovieListData from '../data/MovieListData.json';
import MovieCard from './MovieCard';
import '../styles/MovieList.scss';
import { Link } from 'react-router-dom';

const MovieList = () => {
  
  const movieList = MovieListData.results;
  
  return (
    <Link to="/details">
    <div className="movie-list">
      {movieList.map((movie) => (
        <MovieCard
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.vote_average}
          key={movie.id}/>
      ))}
    </div>
    </Link>
  );
}

export default MovieList;
