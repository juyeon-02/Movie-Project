import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import MovieCard from '/src/Components/MovieCard';
import MovieList from './Components/MovieList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        
      </Routes>
      </BrowserRouter>
  );
}

export default App;
