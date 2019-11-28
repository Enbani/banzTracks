import React from 'react';

const PlaylistItem = (props) => {
  return(
    <div key={ props.id } className={props.itemStyle}>
      <iframe
        src={ `https://open.spotify.com/embed/playlist/${props.spotifyId}` }
        width={ props.playlistWidth }
        height={ props.playlistHeight }
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        >
      </iframe>
    </div>
  )
};

export default PlaylistItem;
