import React from 'react';
import { Component } from 'react';

import NavigationBar from './navigationBar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}