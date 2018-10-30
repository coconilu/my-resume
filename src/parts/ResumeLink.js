import React, { Component } from 'react';
import { IoIosLink } from "react-icons/io";

const linkIcon = {
  width: `1.2em`,
  height: `1.2em`,
  verticalAlign: `middle`,
  color: `#4472ca`,
}

class ResumeLink extends Component {
  render() {
    return (
      <a className="a-without-decoration text-bold" href={this.props.link} target="_blank" rel="noopener noreferrer">{this.props.description}{this.props.link}  {<IoIosLink style={linkIcon} />}</a>
    );
  }
}

export default ResumeLink;
