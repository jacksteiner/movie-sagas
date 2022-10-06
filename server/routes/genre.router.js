const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const query = `SELECT genres.name FROM genres
  JOIN movies_genres ON movies_genres.genre_id = genres.id
  JOIN movies ON movies.id = movies_genres.movie_id
  WHERE movies.id = $1;`
  pool.query(query, [req.params.id])
    .then( result => {
      res.send(result.rows);
      console.log(result.rows)
    })
    .catch(error => {
      console.log('error in get genres', error);
      res.sendStatus(500)
    })
});

module.exports = router;