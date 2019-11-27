require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');

const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

const app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`App server started at port ${port}`);
});

module.exports = { app };
