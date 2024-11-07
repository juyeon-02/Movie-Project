import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCard from '/src/Components/MovieCard';
import MovieList from './Components/MovieList';
import MovieDetail from './Components/MovieDetail';


function App() {
  return (

      <Routes>
        <Route path="/" element={<MovieList />} />
       <Route path='/details' element={<MovieDetail/>} />
      </Routes>
  );
}

export default App;
