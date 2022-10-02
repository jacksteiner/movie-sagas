import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails () {

    const movies = useSelector(store => store.movies)
    const history = useHistory();
    const detailsList = useSelector(store => store.detailsList);

    const handleDetails = () => {
        dispatchEvent({type: 'FETCH_DETAILS'})
    }

    useEffect (() => {
        console.log('')
        handleDetails();
    }, [])

    return (
        <>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <br></br>
            {movie.description}
        </div>
        </>
    )
}

export default MovieDetails;