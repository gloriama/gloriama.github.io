import React from 'react';
import { Component } from 'react';

import NavigationBar from './navigationBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Gloria Ma</h1>
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}