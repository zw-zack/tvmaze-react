import React, { Component } from 'react'


class Results extends Component {
  render() {
    let results = this.props.shows.map((show, index) => {
      return (
        <div key={index}>
          <img src={show.image} alt={show.name} />
          <p>{show.name}</p>
        </div>
      )
    })
    return (
      <div>
        {results}
      </div>
    )
  }
}


export default Results
