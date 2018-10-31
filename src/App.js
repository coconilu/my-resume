import React, { Component } from 'react';
import './App.css';
import './parts/parts.css';
import ResumeHeader from './parts/ResumeHeader.js'
import ResumeBody from './parts/ResumeBody.js'

class App extends Component {

  componentDidMount() {
    const QueueState = {
      running: 1,
      stopping: 0
    }

    const actQueue = {
      queue: [],
      interval: 300,
      status: QueueState.stopping,
      run: function () {
        let shuoldGoOn = () => {
          if (this.queue.length !== 0) {
            this.queue.shift().call(null)
            return true
          } else {
            this.status = QueueState.stopping
            return false
          }
        }
        let step = () => {
          setTimeout(() => {
            if(shuoldGoOn()) step()
          }, this.interval)
        }
        step()
      },
      push: function (cb, interval = this.interval) {
        this.queue.push(cb)
        this.interval = interval
        if (this.status === QueueState.stopping) {
          this.status = QueueState.running
          setTimeout(() => {
            this.run()
          })
        }
      }
    }

    function onView(element, callback, removeCallBack) {
      let windowHeight = window.innerHeight
      let elementTopOffset = element.getBoundingClientRect().top
      if (elementTopOffset > 0 && elementTopOffset < windowHeight) {
        callback && callback()
        removeCallBack && window.removeEventListener('scroll', removeCallBack)
        return true
      } else {
        return false
      }
    }
    function whenScrollOnView(element, callback, interval) {
      let timeOut, onScroll
      window.addEventListener('scroll', onScroll = () => {
        timeOut && clearTimeout(timeOut)
        timeOut = setTimeout(() => {
          onView(element, callback, onScroll)
        }, interval)
      })
    }

    window.addEventListener('load', () => {
      let paragraphs = document.querySelectorAll('.resume-paragraph-container')
      paragraphs.forEach(element => {
        let action = () => {
          actQueue.push(() => {
            element.classList.remove('resume-paragraph-container--init')
          })
        }
        if (!onView(element, action)) {
          whenScrollOnView(element, action)
        }
      })
    })
  }

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
