const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { notFound, errorHandler } = require('./middlewares/index');

const newsRouter = require('./routes/news');

app.use(bodyParser.json());
app.use(newsRouter);
app.get('/', (req, res) => res.send('Hello World!'));

// For handling errors and 404 responses
app.use(notFound);
app.use(errorHandler);

module.exports = app;
