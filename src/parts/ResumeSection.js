import React, { Component } from 'react';

class ResumeSection extends Component {
  render() {
    return (
      <section className="resume-section">
        <header className="resume-section-header">
          <span>{this.props.title}</span>
        </header>
        <div className="resume-section-body">
          {this.props.children}
        </div>
      </section>
    );
  }
}

export default ResumeSection;
