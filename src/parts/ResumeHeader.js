import React, { Component } from 'react';
import Field from './Filed';
import avatar from '../avatar.jpg'
import { MdEmail, MdPhoneIphone, MdPerson } from "react-icons/md";

const headerIconStyle = {
  height: `1.5em`,
  width: `1.5em`,
  verticalAlign: `sub`,
}

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
              <li><Field left="求职目标：" right="全栈工程师"></Field></li>
            </ul>
          </div>
        </section>
        <section className="resume-header-right">
          <ul className="resume-list resume-list--absolute">
            <li><Field left={<MdEmail style={headerIconStyle} />} right="827130441@qq.com"></Field></li>
            <li><Field left={<MdPhoneIphone style={headerIconStyle} />} right="13691873951"></Field></li>
            <li><Field left={<MdPerson style={headerIconStyle} />} right="25岁"></Field></li>
          </ul>
        </section>
      </article>
    )
  }
}

export default ResumeHeader
