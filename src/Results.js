import React, { Component } from 'react'
import './Results.css'

class Results extends Component {
  render () {
    let results = this.props.shows.map((show, index) => {
      return (
        <div key={index}>
          <img src={show.image} /><p>{show.name}</p>
        </div>
      )
    })
    return (
      <div className="resultsContainer">
        {results}
      </div>
    )
  }
}

export default Results