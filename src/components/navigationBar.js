import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Projects</Link> |&nbsp;
        <Link to='/about'>About</Link> |&nbsp;
        <Link to='/resume'>Resume</Link> |&nbsp;
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }
}