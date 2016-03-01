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

app.get('/artist', (req, res) => {
  models.Artist.findAll()
  .then((data) => {  res.send(data);});
});

app.get('/playlist', (req, res) => {
  models.Playlist.findAll()
  .then((data) => {  res.send(data);});
});

app.get('/invoice', (req, res) => {
  models.Invoice.findAll({
      attributes: {exclude: "ExcludeId"},
      include: [{
        model: models.Customer,
        attributes: {exclude: "CustomerId"}
      }]
    })
    .then(data => res.send(data));
});

app.get('/customer', (req, res) => {
  models.Customer.findAll()
  .then((data) => {  res.send(data);});
});

app.get('/album', (req, res) => {
  models.Album.findAll({
      attributes: {exclude: "ArtistId"},
      include: [{
        model: models.Artist,
        attributes: {exclude: "ArtistId"}
      }]
    })
    .then(data => res.send(data));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});