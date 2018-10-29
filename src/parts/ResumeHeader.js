import React, { Component } from 'react';
import avatar from '../avatar.jpg'

class ResumeHeader extends Component {
  render() {
    return (
    <article className="resume-header-container">
      <section className="resume-header-left">
        <div className="resume-header-avatar">
          <img src={avatar} alt="头像"></img>
        </div>
        <div className="resume-header-simple-message"></div>
      </section>
      <section className="resume-header-right">
        <ul>
          <li>邮件：827130441@qq.com</li>
          <li>手机：13691873951</li>
          <li>年龄：25岁</li>
        </ul>
      </section>
    </article>
    )
  }
}

export default ResumeHeader
