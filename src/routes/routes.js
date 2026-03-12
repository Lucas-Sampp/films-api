const express = require('express');

const router = express.Router();

const movies = require('../data/movies');

router.get('/', (req,res) => {
    res.json(movies);
});

router.get('/:id', (req,res) => {
    const movie = movies.find (m => m.id === Number(req.params.id));

    if (!movie) {
        return res.status(404).json({message:"Sorry, the movie was not found"});
    }

    res.json(movie);
})

module.exports =  router;