import React, { Component } from 'react';
import './Favorites.css';
import { createList } from '../api/creatList';


class Favorites extends Component {

    state = {
        title:''
    }

    // btnDisabled = Boolean(
    //     this.state.title.trim() === '' ||
    //     this.

    // )


    render() {
        const { data, removeFavorite } = this.props
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {data.map((item) => {
                        return (
                            <li style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }} key={item.id}>{item.Title} ({item.Year})
                                <button onClick={() => removeFavorite(item.imdbID)}>Sil</button>
                            </li>
                        );
                    })}
                </ul>
                <button disabled={this.btnDisabled} type="button" className="favorites__save" onClick={() => createList(this.state.title, data)}>Сохранить список</button>
            </div>
        );
    }
}

export default Favorites;