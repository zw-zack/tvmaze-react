import React from 'react';

import styles from './style.scss';

import {results} from '../../../../results.js';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      list: []
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  changeHandler(event) {
    this.setState({word: event.target.value});
  }

  searchClick() {
    this.state.list = [];
    let wordSearched = this.state.word.toLowerCase();
    var listToPlace = [...this.state.list];
    for (var i = 0; i < results.length; i++) {
      let nameFromResults = results[i].show.name.toLowerCase();
      if (nameFromResults.includes(wordSearched) === true) {
        listToPlace.push(results[i].show.name);
      }
    }
    this.setState({list: listToPlace});
  }

  render() {
    let itemsElements = this.state.list.map((item) => {
      return <li>{item}</li>;
    });
    return (
      <div>
        <p>{this.state.word}</p>
        <input onChange={this.changeHandler} className={styles.name} value={this.state.word} />
        <button onClick={this.searchClick} value={this.state.word}>
          search
        </button>
        <ol>{itemsElements}</ol>
      </div>
    );
  }
}

export default Form;
