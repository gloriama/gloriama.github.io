import React, { Component } from 'react';
import Clipboard from 'clipboard';

export default class extends Component {
  constructor(props) {
    super(props);
    new Clipboard('.clipboardButton');
  }

  selectInputValue(target) {
    target.setSelectionRange(0, target.value.length);
  }

  render() {
    return (
      <div className="content">
        <p>
          I am best reached via email at:
          <input onClick={(e) => this.selectInputValue(e.target)} type="text" id="email-address" value="gloria.ma@hackreactor.com" readOnly />
          <button className="clipboardButton" data-clipboard-target="email-address">
            <img className="icon" src="assets/octicon-clippy.png" alt="Copy to clipboard" />
          </button>
        </p>
        
        <p>Please feel free to introduce yourself and share a challenge you are currently facing, and we'll get lunch or tea.</p>
      </div>
    );
  }
}