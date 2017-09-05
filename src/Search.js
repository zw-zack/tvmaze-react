import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.onSubmitQuery}>
          <input type="text" placeholder="Enter a show name..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
