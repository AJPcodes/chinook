'use strict';

const express = require('express');

const models = require('./models/');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    status: 'Success'
  });
});

app.get('/genres', (req, res) => {
  models.Genre.findAll()
    .then((data) => { res.send(data);});
});

app.get('/mediatype', (req, res) => {
  models.MediaType.findAll()
  .then((data) => {  res.send(data);});
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});