const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  series: String,
  description: String,
  date: Date,
  playlists: [{
      spotifyId: String,
      title: String,
      coverPhoto: String
    }]
});

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = { Playlist };
