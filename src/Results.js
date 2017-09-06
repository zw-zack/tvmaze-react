import React, { Component } from 'react'
import './Results.css'

class Results extends Component {
  render () {
    let results = this.props.shows.map((show, index) => {
      return (
        <div key={index}>
          <img src={show.image} alt={show.name} /><p>{show.name}</p>
        </div>
      )
    })
    return (
      <div>
        <button onClick={this.props.handleSearchAgain}>Back to Search</button>
        <div className="resultsContainer">
        {results}
        </div>
      </div>
    )
  }
}

export default Results