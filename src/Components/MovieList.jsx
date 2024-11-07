import MovieListData from '../data/MovieListData.json'
import MovieCard from './MovieCard'




const MovieList = () => {

    return (
    <>
    {MovieListData && MovieListData.results.map((movie) => (
        <MovieCard poster={movie.poster} title={movie.title}
        rating={movie.vote_average } key={movie.id}/>
    ))}
    </>
    )
}
export default MovieList