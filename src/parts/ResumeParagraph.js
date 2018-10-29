import React, { Component } from 'react';

class ResumeParagraph extends Component {
  render() {
    return (
      <section className="resume-paragraph-container">
        <p className="resume-paragraph-container-title">
          {this.props.titleLeft}
        </p>
        <div className="resume-paragraph-container-boby">
          <p>{this.props.titleRight}</p>
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default ResumeParagraph;
