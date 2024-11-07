import { useEffect, useState } from 'react'
import MovieListData from '../data/MovieListData.json'
import MovieCard from './MovieCard'

const MovieList = () => {
const [movieList, setMovieList] = useState([]);

useEffect(()=> {
    setMovieList(MovieListData.results)
},[])

    return (
    <>
    {movieList && movieList.map((movie) => (
        <MovieCard poster={movie.poster_path} title={movie.title}
        rating={movie.vote_average } key={movie.id}/>
    ))}
    </>
    )
}
export default MovieList;