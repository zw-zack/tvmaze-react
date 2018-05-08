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
    this.state = {
      message: 'wow'
    };
  }

  render() {
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
