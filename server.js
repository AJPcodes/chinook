'use strict';

const express = require('express');

const Genre = require('./models/').Genre;

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.get('/genres', (req, res) => {
  Genre.findAll().then((genres) => {
    res.send(genres);
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});