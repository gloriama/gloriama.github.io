import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link className="nav-item" to='/'>Projects</Link>
        <Link className="nav-item" to='/about'>About</Link>
        <Link className="nav-item" to='/resume'>Resume</Link>
        <Link className="nav-item" to='/contact'>Contact</Link>
      </div>
    );
  }
}