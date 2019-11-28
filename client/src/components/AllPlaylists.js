import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PlaylistSection } from './common';

// <PlaylistSection
//   containerStyle='playlist-container'
//   headingStyle='playlist-header'
//   textStyle='nav-title'
//   headingTitle='Electric Dreams'
//   spotifyId='2eBHOGAPTTPMDavGB8kvl2'
//   playlistWidth='400px'
//   playlistHeight='580px'
//   />

class AllPlaylists extends Component {
  generateList() {
    let { playlists } = this.props;

    if(playlists !== null){
      let lists = playlists.map((item, index) => {
        return(
          <PlaylistSection
            containerStyle={ this.props.containerStyle}
            headingStyle={ this.props.headingStyle }
            textStyle={ this.props.textStyle }
            headingTitle={ item.series }
            playlistData = { item.playlists }
            />
        )
      })
      return lists;
    }

  }

  render(){
    return(
      <div>
        {this.generateList()}
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return { playlists: state.playlists.playlists }
}

export default connect(mapStateToProps, {})(AllPlaylists);
