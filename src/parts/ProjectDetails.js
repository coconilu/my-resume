import React, { Component } from 'react';

class ProjectDetails extends Component {
  render() {
    return (
      <div className="project-details-container">
        <p>{this.props.title}</p>
        <p className="text-indent-2em">{this.props.children}</p>
      </div>
    );
  }
}

export default ProjectDetails;
