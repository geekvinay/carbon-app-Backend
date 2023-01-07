const { json } = require('body-parser');
const express = require('express');

const router = express.Router();

router.get('/news', (req, res) => {
  console.log('Request on news');

  newsResponse = require('../data/response.json');

  res.send(newsResponse);
});

router.get('/news/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Request on news ${id}`);

  newsArticle = require('../data/newsArticle.json');

  res.send(newsArticle);
});

module.exports = router;
