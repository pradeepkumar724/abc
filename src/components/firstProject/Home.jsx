import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';

function Home() {
  return (
    <div>
        <h1>home page</h1>
        <ul style={{listStyleType: "none"}}>
            {data.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link to={`/${movie.name}`}>
                            {movie.name}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Home