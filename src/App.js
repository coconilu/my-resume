import React, { Component } from 'react';
import './App.css';
import './parts/parts.css';
import ResumeHeader from './parts/ResumeHeader.js'
import ResumeBody from './parts/ResumeBody.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ResumeHeader />
        <ResumeBody />
      </div>
    );
  }
}

export default App;
