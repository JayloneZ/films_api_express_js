//since we don't have a database we'll use our front end models at the moment
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');
const getFilms = require('../client/src/models/films');
const express = require('express');
const filmRouter = new express.Router();
const films = getFilms();

filmRouter.get('/', function (req, res) {
	res.json(films);
});

filmRouter.post('/', function (req, res) {
	const newFilm = req.body.film;
	films.push(newFilm);
	res.json(films);
});

// see one film
filmRouter.get('/:id', function (req, res) {
	const selectedFilm = films[req.params.id];
	res.json(selectedFilm);
});

// edit a film
filmRouter.put('/:id', function (req, res) {
	const newFilm = req.body.film;
	films[req.params.id] = newFilm;
	res.json(films);
});

module.exports = filmRouter;
