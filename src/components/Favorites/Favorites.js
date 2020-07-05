// const express = require("express");
// const router = express.Router();
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import business from '../../redux/reducers/businessReducer';
// const pool = require('../modules/pool');

class Favorites extends Component {

    componentDidMount() {
        this.getFavorites();
    }

    //function that gets all favorite beers from the server/database
    getFavorites = () => {
        console.log('In getFavorites');
        this.props.dispatch({ type: 'GET_FAVORITES' });
    }

    render() {
        return (
            <>
                <div className="favorite">
                    <div className="homeContainer">
                        <h1 className="heading">Favorites</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Business Name</th>
                                    <th>Rating</th>
                                    <th>Reviews</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.reduxStore.favorites.map(business => <tr key={business.id}>
                                    <td>{business.business_name}</td>
                                    <td id="favoritesCell"><img className="starpic" src="../images/fivestar.jpeg" alt="stars"></img></td>
                                    <td className="tableComments">{business.comments}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

const putPropsOnRedux = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(putPropsOnRedux)(Favorites));


// router.get('/', (req, res) => {
//     console.log('is authenticated?', req.isAuthenticated());
//     const user = req.user.id
//     console.log('user', req.user);
//     if (req.isAuthenticated()) {
//         let queryText = `SELECT business.id, business.name, business.description, business.image, favorites.visited FROM business
//     JOIN favorites ON favorites.business_id = business.id
//     JOIN "user" ON favorites.user_id = "user".id where favorites.user_id=$1`;
//         pool.query(queryText, [user])
//             .then(results => res.send(results.rows))
//             .catch(error => {
//                 console.log('Error making SELECT for results:', error);
//                 res.sendStatus(500);
//             });
//     } else
//         res.sendStatus(403)
// });

// router.post("/", (req, res) => {
//     const user = req.body.user
//     const newFavorite = req.body.id
//     console.log('from favorite POST', req.body.id);
//     console.log('from favorite POST user', req.body.user);
//     if (req.isAuthenticated()) {
//         let queryText = 'INSERT INTO "favorites" (user_id, business_id) VALUES ($1, $2)';
//         // console.log('in post addfavorite', newFavorite )
//         pool.query(queryText, [user, newFavorite])
//             .then(() => {
//                 res.sendStatus(200);
//             })
//             .catch(error => {
//                 console.log("error in POST", error);
//                 res.sendStatus(500);
//             });
//     } else res.sendStatus(403)
// });


// router.put('/:id', (req, res) => {
//     console.log('params', req.params.id)
//     const visit = req.body.visit
//     const reqId = req.params.id
//     const queryText = `UPDATE "favorites" SET "visited" = $1 WHERE "business_id" = $2`;
//     pool.query(queryText[visit, reqId]).then((result) => {
//         res.sendStatus(200);
//     }).catch((error) => {
//         console.log(`Error in PUT ${error}`);
//         res.sendStatus(500);
//     })
// });

// router.delete('/:id', (req, res) => {
//     let reqId = req.params.id;
//     console.log('Delete request for id', reqId);
//     let queryText = `DELETE FROM favorites where business_id = $1`;
//     pool.query(queryText, [reqId])
//         .then((result) => {
//             console.log('Item deleted');
//             res.sendStatus(200);
//         })
//         .catch((error) => {
//             console.log(`Error making database query ${queryText}`, error);
//             res.sendStatus(500);
//         })
// })


// module.exports = router;