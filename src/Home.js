import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search'
import Results from './Results'

class Home extends Component {
  render() {
    let output = ( <Search /> )
    if (this.props.hasSearched) {
      output = ( <Results shows={this.props.shows} /> )
    }
    return (
      <div className="Home">
        <h2>React TVMaze</h2>
        {output}
      </div>
    )
  }
}

export default Home;
