require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const { mongoose } = require('./db/mongoose');
const { playlistRouter } = require('./routes');

const port = process.env.PORT;
const environment = process.env.ENVIRONMENT;

const app = express();

app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.use('/api/v1/playlists', playlistRouter);


app.listen(port, () => {
  console.log(`App server started at port ${port}`);
});

module.exports = { app };
