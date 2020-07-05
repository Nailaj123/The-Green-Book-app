const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/:id', (req, res) => {
    // return selected genres
    console.log('in get id', req.params);
    const reqId = req.params.id
    const queryText = 'SELECT business.name, business.description, business.image, addresses.street, addresses.city, addresses.state, addresses.zip FROM buisness JOIN addresses on business.address_id = addresses.id  WHERE business.id = $1;';
    pool.query(queryText, [reqId])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;