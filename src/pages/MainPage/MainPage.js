import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {

    state = {
        massiv: [],
        favoriteMovies: []
    }

    addFavoriteMovies = (movieId) => {

        if (!this.state.favoriteMovies.some(item => item.imdbID === movieId.imdbID)) {
            this.setState({
                favoriteMovies: [...this.state.favoriteMovies, movieId]
            })
        }
    }

    removeFavorite = (id) => {
        this.setState({
            favoriteMovies: this.state.favoriteMovies.filter(item => item.imdbID !== id)
        })
    }

    setMovies = (movie) => {
        this.setState({
            massiv: movie
        })
    }

    render() {
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox setMovies={this.setMovies} />
                        </div>
                        <div className="main-page__movies">
                            <Movies functions={this.addFavoriteMovies} movie={this.state.massiv} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites removeFavorite={this.removeFavorite} data={this.state.favoriteMovies} />
                    </aside>
                </main>
            </div>
        );
    }
}

export default MainPage;