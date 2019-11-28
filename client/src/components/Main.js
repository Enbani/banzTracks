import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import components
import { Nav, About, Heading } from './common';
import AllPlaylists from './AllPlaylists';
import { getPlaylists } from '../actions';


class Main extends Component {
  componentDidMount(){
    this.props.getPlaylists();
  }

  render(){
    return(
      <div className='base'>
        <div className='foreground-container section'>
          <Nav
            title={'Banzskywalker\'s Sound Lounge'}
            titleStyle='nav-title'
            navStyle='nav-container'
            />
          <About
            aboutStyle='section about'
            aboutTitle='Welcome to the Sound Lounge'
            aboutContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Amet massa vitae tortor condimentum lacinia quis vel eros.'
            />
          <AllPlaylists
            containerStyle='playlist-container'
            headingStyle='playlist-header'
            textStyle='nav-title'
            />
        </div>
      </div>

    )
  }
};

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps,{
  getPlaylists
})(Main);

// export default Main;
