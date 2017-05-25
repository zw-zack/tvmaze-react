import React, { Component } from 'react';
import Search from './Search'
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
          <h1>React TVMaze</h1>
          <Search />
      </div>
    );
  }
}

export default Home;
