const express = require('express');
const moviesRoutes = require ('./routes/routes');

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes);

module.exports = app;