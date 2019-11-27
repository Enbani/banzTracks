import React, { Component } from 'react';

// import components
import { Nav, About } from './common';

class Main extends Component {

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
        </div>
      </div>

    )
  }
};

export default Main;
