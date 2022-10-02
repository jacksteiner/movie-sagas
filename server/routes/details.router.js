const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get details
    const query = `SELECT * FROM movies ORDER BY "title" ASC`;
    pool.query(query)
        .then( result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('error in get movie details', error);
            res.sendStatus(500);
        })
});

module.exports = router;