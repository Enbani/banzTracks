import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Heading, PlaylistItem } from './';

class PlaylistSection extends Component {

  componentDidUpdate() {
    let { playlists } = this.props;
    console.log(playlists);
  }

  generateList(){
    let { playlistData } = this.props;

    if(playlistData !== null){
      let pdata = playlistData.map((playlist, index) => {
        return(
          <PlaylistItem
            spotifyId = { playlist.spotifyId }
            playlistWidth='400px'
            playlistHeight='500px'
            itemStyle='playlist-item'
            key={ playlist.id }
            />
        )
      })
      return pdata;
    }

  }

  render(){
    return(
      <div className={ this.props.containerStyle}>
        <Heading
          headingStyle={ this.props.headingStyle }
          textStyle={ this.props.textStyle }
          headingTitle={ this.props.headingTitle }
          headingContent={ this.props.headingContent }
          contentStyle={ this.props.contentStyle }
          />
        {this.generateList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists.playlists
  }
}

export default connect(mapStateToProps,{})(PlaylistSection);
