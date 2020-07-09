const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const newRestaurant = req.body;
    console.log('newrestaurant req.body', req.body)
    const queryText = `insert into restaurants ("name", "description", "image") values ($1, $2, $3);`;
    const queryValues = [
        newRestaurant.name,
        newRestaurant.description,
        newRestaurant.image
    ];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error completing insert restaurant query', err);
            console.log(newRestaurant.name)
            res.sendStatus(500);
        });
});

pool.query(queryText, queryValues)
    .then(() => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Error completing insert restaurant query', err);
        console.log(newRestaurant.name)
        res.sendStatus(500);
    });


module.exports = router;