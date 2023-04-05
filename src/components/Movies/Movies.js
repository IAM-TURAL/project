import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {   

    render() {
        const { movie,functions} = this.props;
        return ( 
            <ul className="movies">
                {movie.Search && movie.Search.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem functions={functions} movie={ movie} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;