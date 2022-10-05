import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails () {

    const dispatch = useDispatch();
    const history = useHistory();
    const movie = useSelector(store => store.details);

    const handleDetails = () => {
        // where fetch genres will go
    }

    useEffect (() => {
        // fetchGenres();
    }, [])

    return (
        <>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <br></br>
            {movie.description}
            <br></br>
            {/* Genres go here */}
        </div>
        </>
    )
}

export default MovieDetails;