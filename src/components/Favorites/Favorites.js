// const express = require("express");
// const router = express.Router();
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import business from '../../redux/reducers/businessReducer';
// const pool = require('../modules/pool');

class Favorites extends Component {

    state = {
        favorite: ""
    };


    componentDidMount() {
        this.getFavorites();
    }

    //function that gets all favorite beers from the server/database
    getFavorites = () => {
        //console.log('In getFavorites');
        this.props.dispatch({
            type: 'FETCH_FAVORITES',
            payload: this.state.favorite
        });
        this.setState({
            favorites: ""
        })
    }
    updateVisitStatus = (restaurant, visit) => {
        const objectToSend = { restaurant: restaurant, visit: visit }
        this.props.dispatch({
            type: 'UPDATE_STATUS', payload: objectToSend,
        })
        console.log('payload', objectToSend)

    }

    deleteFavorite = (id) => {

        this.props.dispatch({
            type: 'DELETE_FAVORITE', payload: id,
        })
        console.log('payload', id)

    }

    render() {
        return (
            <div class='body'>
                <div class='list'>
                    <h2>Favorites</h2>
                    <ul>
                        {this.props.favorites.map(listItem => {
                            return (
                                <li key={listItem.id}>
                                    <img src={listItem.image} width='200px' height='200px'></img>
                                    <br />
                                    {listItem.name}
                                    <br />
                                    {listItem.description}
                                    <br />

                                    {listItem.visited === false &&
                                        <button onClick={() => this.updateVisitStatus(listItem.id, 'true')}>Review</button>
                                    }
                                    <button onClick={() => this.deleteFavorite(listItem.id)}>unfavorite</button>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    favorites: state.favorites
});

export default connect(mapStateToProps)(Favorites);

