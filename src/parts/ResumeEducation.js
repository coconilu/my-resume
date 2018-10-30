import React, { Component } from 'react';
import schoolLogo from '../hndx.jpeg';

class ResumeEducation extends Component {
  render() {
    return (
      <div className="resume-education-container">
        <img src={schoolLogo} alt="湖南大学"></img>
        <div className="resume-education-container-details">
          <p>湖南大学</p>
          <p>本科 / 软件工程</p>
        </div>
      </div>
    );
  }
}

export default ResumeEducation;
