import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  render() {
    return (
      <div className="nav-bar">
        <h1 className="nav-logo">Gloria Ma</h1>
        <Link className="nav-link" to='/'>Projects</Link>
        <Link className="nav-link" to='/about'>About</Link>
        <Link className="nav-link" to='/resume'>Resume</Link>
        <Link className="nav-link" to='/contact'>Contact</Link>
      </div>
    );
  }
}