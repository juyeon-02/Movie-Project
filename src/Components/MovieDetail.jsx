import { useEffect, useState } from 'react';
import movieDetailData from '../data/movieDetailData.json';
import '/src/styles/MovieDetail.scss'

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetail = () => {
  const [movieData, setMovieData] = useState({});

  const { poster_path,title,vote_average, genres, overview } = movieData;

  useEffect(() => {
    setMovieData(movieDetailData);
  }, []);

  if (!movieData) {
    return <div>페이지를 로딩하는 중..</div>;
  }

  return (
    <div className='movie-detail'>
        <div>
          <img src={`${baseUrl}${poster_path}`} className='movie-poster'/>
        </div>

        <section>
          <div className='detail_rating'> 
            <h1 className='movie-title'>{title}</h1>
            <p className='movie-rating'>평점 : {vote_average}</p>
          </div>

        <div className='movie-genres'>
          <span className='장르'>장르</span>
            <ul className='movie-genres'>
            {genres && genres.map((genre, index) =>
            <li key={index}>{genre.name}</li>)}
            </ul>
            </div>
            
            <h2 className=''>줄거리</h2>
            <div className='movie-overview'>{overview}</div>
        </section>
    </div>
  );
};

export default MovieDetail;





 