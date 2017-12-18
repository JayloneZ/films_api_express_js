const express = require('express');
const router = new express.Router();

router.use('/films', require('./films.js'));

module.exports = router;
