import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <h1>React TVMaze</h1>
          <SearchContainer />
      </div>
    );
  }
}

export default Home;
