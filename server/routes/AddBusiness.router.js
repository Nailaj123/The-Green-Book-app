const express = require("express");
const router = express.Router();
const pool = require('../modules/pool');
//const { default: AddBusiness } = require("../../src/components/AddBusiness/AddBusiness");

router.post('/', (req, res) => {
    const newBusiness = req.body;
    console.log('newBusiness req.body', req.body)
    const queryText = `INSERT INTO "business" ("name", "description", "image") values ($1, $2, $3);`;
    const queryValues = [
        newBusiness.name,
        newBusiness.description,
        newBusiness.image
    ];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error completing insert business query', err);
            console.log(newBusiness.name)
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const newBusinessAddress = req.body;
    const queryText = `insert into bsuinesses ("street", "city", "state", "zip") values ($1, $2, $3. $4);`;
    const queryValues = [
        newBusinessAddress.street,
        newBusinessAddress.city,
        newBusinessAddress.state,
        newBusinessAddress.zip,
    ];
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Error completing insert business query', err);
            console.log(AddBusiness.name)
            res.sendStatus(500);
        });
});

module.exports = router;