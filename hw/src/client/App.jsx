import React from 'react';
import {hot} from 'react-hot-loader';

import styles from './style.scss';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import {results} from '../../results.js';

console.log(results);
class App extends React.Component {
  constructor() {
    super();
    // this.searchClick = this.searchClick.bind(this);
    this.state = {
      message: 'wow'
    };
  }

  // searchClick() {
  //   var listToPlace = this.state.list;

  //   for (var i = 0; i < results.length; i++) {
  //     listToPlace.push(results[i].show.name);
  //   }
  //   this.setState({list: listToPlace});
  // }

  render() {
    // let itemsElements = this.state.list.map((item) => {
    //   return <li>{item}</li>;
    // });

    return (
      <div className={styles.main}>
        Welcome.
        <Form />
        <Counter message={this.state.message} />
      </div>
    );
  }
}

export default hot(module)(App);
