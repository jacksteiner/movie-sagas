import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

function MovieDetails () {

    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const genres = useSelector(store => store.genre)
    const movie = useSelector(store => store.details);

    const getGenres = () => {
        dispatch({ type: 'FETCH_GENRES', payload: id })
    }

    useEffect (() => {
         getGenres();
    }, [id])

    return (
        <>
        <div key={movie.id} >
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <br/>
            {movie.description}
            <section className="genres">
            {genres.map(genre => {
                return (
                    <div>
                        <p>{genre.name}</p>
                    </div>
                )
            })}
            </section>
            {/* Genres go here */}
        </div>
        </>
    )
}

export default MovieDetails;