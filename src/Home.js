import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Search from './Search'
// import Results from './Results'
import SearchContainer from './SearchContainer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>React TVMaze</h2>
        <SearchContainer />
      </div>
    )
  }
}

export default Home;
