import React, { Component } from 'react';
import ResumeSection from './ResumeSection';
import ResumeParagraph from './ResumeParagraph';
import ProjectDetails from './ProjectDetails';
import ResumeEducation from './ResumeEducation';
import MyAbility from './MyAbility';
import MyMetaAbility from './MyMetaAbility';
import ResumeLink from './ResumeLink';

class ResumeHeader extends Component {
  render() {
    return (
      <article className="resume-section-container">
        <ResumeSection title="教育背景">
          <ResumeEducation />
        </ResumeSection>
        <ResumeSection title="自我评估">
          <ResumeParagraph titleLeft="" titleRight="&nbsp;">
            1. 精通JS语言，了解JS引擎，熟悉异步编程（事件循环）、多线程编程，精通闭包、原型、作用域（链）、函数式编程、元编程，了解可迭代对象、迭代器、生成器；<br />
            2. 掌握ES6、ES7、ES8语法，熟练使用Webpack、Babel，编程效率高；<br />
            3. 熟悉HTML5语义化编程，对于网页结构有自己的见解；<br />
            4. 精通CSS，可以使用伪元素、定位、变形来完成很多特效；对于元素对齐、页面布局样式、响应式布局方面有过丰富经验；<br />
            5. 熟悉浏览器渲染机制、防抖节流、懒加载资源、预加载资源、雪碧图等，对于页面性能和首屏加载有丰富的优化经验；<br />
            6. 研究过用户体验，懂得用过渡效果、动画效果、动画队列、FLIP特效来使页面更加生动；<br />
            7. 有过设计项目架构的经验，热衷于低耦合高内聚的前端架构——Flux架构；曾经使用VueJS全家桶搭建过中型项目，有能力使用React创建小型项目，了解Jest测试框架；<br />
            8. 阅读过VueJS源码，了解响应式设计的原理、虚拟DOM和diff算法；<br />
            9. 开源过一些NPM项目，比如promise-polyfill、sticky-polyfill、lazyload-picture、flip-animation，对于封装接口和对接接口有丰富的经验；<br />
            10. 熟悉NodeJS，掌握模块化编程方式、事件模型、网络模块；有使用Express和Koa的开发经验，阅读过Express和Koa的源码并了解它们之间的区别；<br />
            11. 掌握同源策略、跨域请求，对网络安全有一定的见解，热爱HTTPS、OAuth2.0、JWT；<br />
            12. 热爱新技术，自主学习过TypeScript、Chart.js（图表库）、GraphQL；喜欢分享交流，参加过MDN翻译、掘金翻译计划；
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="工作经验">
          <ResumeParagraph titleLeft="2017.03-至今" titleRight="深圳前海联动云汽车租赁有限公司／科技开发部">
            <p>1. 负责完善和维护公司内部的流程系统（BPM）；</p>
            <p>2. 负责设计和开发公司内部使用的“员工自助系统”；</p>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="2016.08-2017.02" titleRight="卓望数码技术深圳有限公司／研发事业部">
            <p>1. 开发维护网络局数据项目，编写部署说明书指导运维部同事安装升级系统；</p>
            <p>2. 主导使用Haproxy代理服务器分区域部署原项目。</p>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="项目经验">
          <ResumeParagraph titleLeft="开源社区" titleRight="iGitStar">
            <div>
              <ProjectDetails title="背景：">
                iGitStar 是管理 GitHub stars 的辅助工具， 对于经常需要翻阅 stars 或者借助 stars 学习的用户非常适用，它可以帮你置顶你喜欢的 star 项目。
              </ProjectDetails>
              <ProjectDetails title="开发经过：">
                1. 设计项目的前端架构，拆分出用户模块和stars模块。用户模块使用Vuex管理，读取用户信息并开放用户信息更改通知接口；stars模块用于存储加载好的star项目的信息，并分为收藏过的和未收藏过的；<br />
                2. 设计卡片模板，用于渲染展示每个star项目的信息，使用“requestAnimationFrame”优化卡片插入页面的流畅度，并使用FLIP动画过渡每一次收藏操作；<br />
                3. 增强用户体验，使用骨架屏特效作为首屏加载过渡动画；使用滚动、淡出淡入的动画效果响应登录操作；使用“滚动至底才会异步加载资源”的懒加载模式加载用户的stars信息；使用“防抖”机制处理onScroll handler；<br />
                4. 使用“媒体查询”重构项目为响应式架构，方便用户在移动端使用。
              </ProjectDetails>
              <ProjectDetails title="发布地址：">
                <ResumeLink link="https://igitstar.leanapp.cn" />
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="联动云" titleRight="员工自助平台">
            <div>
              <ProjectDetails title="背景：">
                员工自助平台是公司内部使用的系统，汇聚了日常使用的行政管理功能，比如加班晚餐预定、会议室预定、公寓预定、办公用品采购等功能。
              </ProjectDetails>
              <ProjectDetails title="开发经过：">
                1. 设计项目的前端架构，把整个系统拆分成主模块和可插拔模块；主模块提供统一的登录注销模块、提供用户信息变更通知接口（Vuex）、提供统一的异步加载资源功能（axios）以及过渡动画（激光进度条）、提供置顶按钮、提供单页路由功能（Vue-Router）；可插拔模块可以调用主模块提供的功能来实现各自的业务；<br />
                2. 为了优化用户体验，使用企业微信开放的OAuth接口实现扫码登录并使用localStorage接口保存登录状态；<br />
                3. 为了节省开发测试时间，学习并使用iView组件库提供的栅格系统、表格组件、表单组件、通知组件等；还熟练掌握了animation.css动画库；学会了配置webpack的代理功能解决跨域调试问题，和使用它的懒加载功能优化首屏加载速度。
              </ProjectDetails>
              <ProjectDetails title="发布地址：">
                <ResumeLink link="https://ldygo.leanapp.cn" />
              </ProjectDetails>
            </div>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="个人作品">
          <ResumeParagraph titleLeft="&nbsp;" titleRight="&nbsp;">
            <div>
              <ProjectDetails title={(<ResumeLink link="https://github.com/coconilu/Blog" description="个人博客：" />)}>
              </ProjectDetails>
              <ProjectDetails title={(<ResumeLink link="https://www.npmjs.com/~coconilu" description="NPM开源项目：" />)}>
              </ProjectDetails>
            </div>
          </ResumeParagraph>
        </ResumeSection>
      </article>
    );
  }
}

export default ResumeHeader;
