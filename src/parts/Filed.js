import React, { Component } from 'react';

class Field extends Component {
  render() {
    return (
      <span className="resume-field">
        <span>{this.props.left}：</span>
        <span>{this.props.right}</span>
      </span>
    );
  }
}

export default Field;
