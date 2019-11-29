import React from 'react';

const FollowButton = (props) => {
  return(
    <iframe
    src="https://open.spotify.com/follow/1/?uri=spotify:user:roz49womut004n0tbtfiq54cm&size=basic&theme=dark&show-count=0"
    width="200"
    height="25"
    scrolling="no"
    frameborder="0"
    style={{border:"none", overflow:"hidden"}}
    allowtransparency="true">
    </iframe>
  )
};

export default FollowButton;
