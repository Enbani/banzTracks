import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import components
import { Nav, About, Heading, Footer } from './common';
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
            aboutStyle='about section'
            titleStyle='about-header'
            contentStyle='about-text'
            aboutTitle='Welcome to my Sound Lounge'
            aboutContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Amet massa vitae tortor condimentum lacinia quis vel eros.'
            />
          <AllPlaylists
            containerStyle='playlist-container'
            headingStyle='playlist-header'
            textStyle='nav-title'
            contentStyle='about-text'
            />
          <Footer
            footerStyle='footer-container'
            footerText='Curated by Banzskywalker, 2019'
            footerTextStyle='footer-text'
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
