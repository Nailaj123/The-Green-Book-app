const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');


router.get('/', (req, res) => {
    console.log('req.user:', req.user);
    console.log('is authenticated?', req.isAuthenticated());
    if (req.isAuthenticated()) {
        let queryText = 'select * from restaurants'
        pool.query(queryText)
            .then(results => res.send(results.rows))
            .catch(error => {
                console.log('Error making SELECT for results:', error);
                res.sendStatus(500);
            });
    } else res.sendStatus(403);

});




module.exports = router;