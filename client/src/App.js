import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';

 // import { Nav } from './components/common';
import Main from './components/Main';

// import styles
import './styles/index.scss';


class App extends Component {
  render(){
    return(
      <div>
        <Main
        />
      </div>
    )
  }
}

export default App;
