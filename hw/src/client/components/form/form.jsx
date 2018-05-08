import React from 'react';

import styles from './style.scss';

import {results} from '../../../../results.js';

import {queryTVMazeAPI} from './util.js';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      list: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.searchClick = this.searchClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  changeHandler(event) {
    this.setState({word: event.target.value});
  }

  // searchClick() {
  //   this.state.list = [];
  //   let wordSearched = this.state.word.toLowerCase();
  // var listToPlace = [...this.state.list];
  // for (var i = 0; i < results.length; i++) {
  //   let nameFromResults = results[i].show.name.toLowerCase();
  //   if (nameFromResults.includes(wordSearched) === true) {
  //     listToPlace.push(results[i].show.name);
  //   }
  // }
  //   this.setState({list: listToPlace});
  // }

  handleSearchInput() {
    let wordSearched = this.state.word.toLowerCase();
    queryTVMazeAPI(wordSearched, (result) => {
      this.setState({list: result});
    });
    // queryTVMazeAPI(wordSearched);
    // this.setState({list: results});
  }

  // queryTVMazeAPI(query) {
  //   // fill url in with a URL based on the example at:
  //   // https://www.tvmaze.com/api#show-search
  //   // replace a part of the example URL with the user input, which you can
  //   // assume will be the parameter of this function, `query`
  //   const url = 'http://api.tvmaze.com/search/shows?q=' + query;
  //   fetch(url)
  //     .then((response) => {
  //       if (response.status !== 200) {
  //         console.log('Looks like there was a problem. Status Code: ' + response.status);
  //         return;
  //       }

  //       // Examine the text in the response
  //       response.json().then(function(data) {
  //         console.log(data); //make sure to return something
  //       });
  //     })
  //     .catch((err) => {
  //       console.log('Fetch Error :-S', err);
  //     });
  // }

  render() {
    console.log(this.state.list);
    let itemsElements =
      this.state.list.length === 0
        ? null
        : this.state.list.map((item) => {
            return <li>{item}</li>;
          });
    return (
      <div>
        <p>{this.state.word}</p>
        <input onChange={this.changeHandler} className={styles.name} value={this.state.word} />
        <button onClick={this.handleSearchInput} value={this.state.word}>
          search
        </button>
        <ol>{itemsElements}</ol>
      </div>
    );
  }
}

export default Form;
