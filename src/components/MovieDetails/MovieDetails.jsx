import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MovieDetails () {

    const detailsList = useSelector(store => store.detailsList);

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