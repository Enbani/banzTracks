const express = require('express');
const _ = require('lodash');
const { Playlist } = require('../models');

const router = express.Router();

router.post('/', async (req, res) => {
  let newSeries = _.pick(req.body, ['series', 'date', 'playlists']);

  let playlist = new Playlist(newSeries);

  try {
    let newPlaylist = await playlist.save();
    return res.status(200).send({ payload:newPlaylist })
  } catch(e) {
    return res.status(400).send({ error: e.message });
  }
})

router.get('/', async (req, res) => {
  try {
    const allPlaylists = await Playlist.find({});
    return res.send({ payload: allPlaylists })
  } catch(e) {
    return res.status(400).send({ error: e.message });
  }
});

module.exports = router;
