import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {
    render() {
        const { movie, functions } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={movie.Poster} alt={movie.Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{movie.Title}&nbsp;({movie.Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={()=>functions(movie)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
 
export default MovieItem;