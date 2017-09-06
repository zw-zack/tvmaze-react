import React, { Component } from 'react'

class Search extends Component {
  render () {
    return (
      <div>
        <form onSubmit={this.props.onSubmitQuery}>
          <input type="text"
            value={this.props.query}
            placeholder="Enter a show name..."
            onChange={this.props.handleSearchInput} />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
