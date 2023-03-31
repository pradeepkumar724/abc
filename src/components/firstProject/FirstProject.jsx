import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';

function FirtsProject() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<Movie/>}/>
    </Routes>
  )
}

export default FirtsProject;