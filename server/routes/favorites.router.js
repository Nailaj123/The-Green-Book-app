
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//route to get all 5 star rated businesses for favorites page
// router.get('/', (req, res) => {
//     console.log('Favorites GET arrived at server', req.user.id);
//     let param = req.user.id;
//     pool.query(`SELECT * FROM "user_input" WHERE "user_id" = $1 AND "rating" = 5 ORDER BY "date"`, [param])
//         .then((result) => {
//             res.send(result.rows);
//         })
//         .catch((error) => {
//             console.log(`ERROR ON QUERY ${error}`)
//             res.sendStatus(500);
//         })
// });

router.get('/', (req, res) => {
    console.log('is authenticated?', req.isAuthenticated());
    const user = req.user.id
    console.log('user', req.user);
    if (req.isAuthenticated()) {
        let queryText = `SELECT businesses.id, businesses.name, businesses.description, businesses.image FROM businesses
    JOIN favorites ON favorites.business_id = businesses.id
    JOIN "user" ON favorites.user_id = "user".id where favorites.user_id=$1`;
        pool.query(queryText, [user])
            .then(results => res.send(results.rows))
            .catch(error => {
                console.log('Error making SELECT for results:', error);
                res.sendStatus(500);
            });
    } else
        res.sendStatus(403)
});

router.post("/", (req, res) => {
    const user = req.body.user
    const newFavorite = req.body.id
    console.log('from favorite POST', req.body.id);
    console.log('from favorite POST user', req.body.user);
    if (req.isAuthenticated()) {
        let queryText = 'INSERT INTO "favorites" (user_id, business_id) VALUES ($1, $2)';
        // console.log('in post addfavorite', newFavorite )
        pool.query(queryText, [user, newFavorite])
            .then(() => {
                res.sendStatus(200);
            })
            .catch(error => {
                console.log("error in POST", error);
                res.sendStatus(500);
            });
    } else res.sendStatus(403)
});
router.put('/:id', (req, res) => {
    console.log('params', req.params.id)
    const visit = req.body.visit
    const reqId = req.params.id
    const queryText = `UPDATE "favorites" SET "visited" = $1 WHERE "business_id" = $2`;
    pool.query(queryText[visit, reqId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete request for id', reqId);
    let queryText = `DELETE FROM favorites where business_id = $1`;
    pool.query(queryText, [reqId])
        .then((result) => {
            console.log('Item deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;