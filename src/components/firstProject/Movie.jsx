import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { data } from './data';

function Movie() {
    const {id} = useParams();
    const [loading,setLoading] = useState(true);
    const [book,setBook] = useState({});
    useEffect(() => {
        setBook(data.find(movie => {
            return movie.name === id;
        }));
        setLoading(false);
    },[loading])
    
    return (
        <>
            {loading ? "loading" : (
                <div>
                    <h1>{book.name}</h1>
                    <p>rating: {book.rating} <br/> laguage: {book.language}</p>
                </div>
            )}
        </>
    )
}

export default Movie