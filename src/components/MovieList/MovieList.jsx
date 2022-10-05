import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom'

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    // const details = useSelector(store => store.details)

    // if the on click needs to do 2 things, make a function
    const handleDetails = (selectedMovie) => {
        dispatch({type: 'SET_DETAILS', payload: selectedMovie})
        history.push('/details')
    }


    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={()=>handleDetails(movie)} src={movie.poster} alt={movie.title}/>
                            <br></br>
                            {/* anon function onClick */}
                            {/* <button > Details </button> */}
                            <br></br>
                            {/* {movie.description} */}
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieList;