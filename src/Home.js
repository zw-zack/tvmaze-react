import React, { Component } from 'react';
import Search from './Search'
import Results from './Results'
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Home">
          <h1>React TVMaze</h1>
          {
            this.props.hasSearched ?
            <Results shows={this.props.shows} /> :
            <Search />
          }
      </div>
    );
  }
}

export default Home;
