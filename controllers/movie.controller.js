const router = require('express').Router();
const Movie = require('../models/movie.model');
const { errorResponse, successResponse, incompleteResponse } = require('../helpers');
const validateSession = require('../middleware/validate-session');

// Create one
router.post('/', validateSession, async(req,res) => {
    try {

        const {
            title,genre,rating,length,releaseYear
        } = req.body;

        const movie = new Movie({
            title,genre,rating,length,releaseYear,
            owner_id: req.user._id
        });

        const newMovie = await movie.save();

        successResponse(res,newMovie);

    } catch (err) {
        errorResponse(res,err);
    }
});

// Get all movies in database
router.get("/", async(req,res) => {
    try {
        
        const getAllMovies = await Movie.find();

        getAllMovies.length > 0 ?
            successResponse(res, getAllMovies) :
            incompleteResponse(res);

    } catch (err) {
        errorResponse(res,err);
    }
});

// Get one movie by id
router.get("/find-one/:id", validateSession, async(req,res) => {
    try {

        const { id } = req.params;
        const getMovie = await Movie.findOne({ _id: id, owner_id: req.user._id });

        getMovie ?
            successResponse(res,getMovie) :
            incompleteResponse(res);

    } catch (err) {
        errorResponse(res,err);
    }
});

// Get all movies by genre
router.get("/genre/:genre", async(req,res) => {
    try {
        
        const { genre } = req.params;
        let buildWord;

        if(genre) {
            for(let i = 0; i < genre.length; i++) {

                if(i === 0) {
                    buildWord = genre[i].toUpperCase();
                } else if(genre[i - 1] === "-") {
                    buildWord += genre[i].toUpperCase();
                } else {
                    buildWord += genre[i].toLowerCase();
                }
            }
        }

        const getMovies = await Movie.find({genre: buildWord, owner_id: req.user._id});

        getMovies.length > 0 ?
            successResponse(res,getMovies) :
            incompleteResponse(res);

    } catch (err) {
        errorResponse(res,err);
    }
});

// Update One PUT/PATCH
router.patch('/:id', validateSession, async(req,res) => {
    try {
        const { id } = req.params
        const info = req.body;

        const filter = {
            _id: id,
            owner_id: req.user._id
        }

        const update = await Movie.findOneAndUpdate(filter, info,{new: true});

        update ?
            successResponse(res, update) : 
            incompleteResponse(res);
        
    } catch (err) {
        errorResponse(res,err);
    }
});

// Delete One
router.delete('/:id', validateSession, async(req,res) => {
    try {
        const { id } = req.params;

        const deleteMovie = await Movie.deleteOne({_id: id, owner_id: req.user._id});

        deleteMovie.deletedCount ? 
            successResponse(res, "Movie removed") :
            incompleteResponse(res);

    } catch (err) {
        errorResponse(res,err);
    }
});

module.exports = router;