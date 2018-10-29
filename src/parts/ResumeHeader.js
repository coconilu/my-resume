import React, { Component } from 'react';
import Field from './Filed';
import avatar from '../avatar.jpg'

class ResumeHeader extends Component {
  render() {
    return (
      <article className="resume-header-container">
        <section className="resume-header-left">
          <div className="resume-header-avatar">
            <img src={avatar} alt="头像"></img>
          </div>
          <div className="resume-header-simple-message">
            <ul className="resume-list resume-list--absolute">
              <li className="resume-job-hunter">王耀辉</li>
              <li><Field left="求职目标" right="全栈工程师"></Field></li>
            </ul>
          </div>
        </section>
        <section className="resume-header-right">
          <ul className="resume-list resume-list--absolute">
            <li><Field left="邮件" right="827130441@qq.com"></Field></li>
            <li><Field left="手机" right="13691873951"></Field></li>
            <li><Field left="年龄" right="25岁"></Field></li>
          </ul>
        </section>
      </article>
    )
  }
}

export default ResumeHeader
