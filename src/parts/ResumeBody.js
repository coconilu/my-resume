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
        <ResumeSection title="工作经验">
          <ResumeParagraph titleLeft="2017.03-至今" titleRight="深圳前海联动云汽车租赁有限公司／科技开发部">
            <p>1. 负责完善和维护公司内部的流程系统（BPM）；</p>
            <p>2. 负责设计和开发公司内部使用的“员工自助系统”；</p>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="2016.08-2017.02" titleRight="卓望数码技术深圳有限公司／研发事业部">
            <p>1. 开发维护网络局数据项目，编写部署说明书指导运维部同事安装升级系统；</p>
            <p>2. 主导使用Haproxy代理服务器分区域部署原项目。</p>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="2015.09-2016.07" titleRight="深圳市共济科技股份有限公司／研发部">
            <p>1. 调研Esper、Drools和StreamBase开源流引擎，与师兄合作开发一个事件流处理和复杂事件处理引擎；</p>
            <p>2. 维护微信服务号后台，开发及时推送重要（如机房预警、告警）消息给用户的功能。</p>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="项目经验">
          <ResumeParagraph titleLeft="开源社区" titleRight="iGitStar">
            <div>
              <ProjectDetails title="背景：">
                iGitStar 是管理 GitHub stars 的辅助工具， 对于经常需要翻阅 stars 或者借助 stars 学习的用户非常适用，它可以帮你置顶你喜欢的 star 项目。
              </ProjectDetails>
              <ProjectDetails title="开发经过：">
                1. 选择轻量级的架构，使用Koa搭设服务器，仅配置了一个静态资源中间件，前端使用VueJS加上亲自动手写组件、动画、异步加载过渡效果；<br />
                2. 借鉴当下流行的骨架屏特效作为首屏加载过渡效果；<br />
                3. 使用“防抖”机制处理“滚动至底异步加载资源”的功能，节省触发滚动事件的次数；<br />
                4. 为了在载入资源的时候不阻塞网页，使用“requestAnimationFrame”优化页面插入元素；<br />
                5. 使用“媒体查询”重构项目为响应式架构，使手机端也可以正常使用；<br />
                6. 初期阶段不考虑账号鉴权功能，繁琐的操作不容易留住用户，所以用户仅需要通过输入自己的GitHub用户名便可以使用，并使用浏览器本地持久化API保存用户登录信息；<br />
                7. 查看官方文档，成功对接获取GitHub数据的公开API；<br />
                8. 如果项目很受欢迎的话，后期会添加标签和搜索功能。<br />
              </ProjectDetails>
              <ProjectDetails title="发布地址：">
                <ResumeLink link="https://igitstar.leanapp.cn" />
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="联动云" titleRight="员工自助平台">
            <div>
              <ProjectDetails title="背景：">
                发起该项目的原因是公司处于初期阶段，内部系统不健全。刚开始仅是一个订晚餐的系统，后来多了会议室预定的系统。于是我做了一个决定，把它们汇集起来做成一个可拓展的平台。
              </ProjectDetails>
              <ProjectDetails title="开发经过：">
                1. 技术选型很重要，为了保证开发质量和效率，我选择当时较为成熟的Express框架搭设服务器，使用中文文档齐全的VueJS和iView组件库设计页面；<br />
                2. 账号鉴权模块使用了企业微信的开放API —— OAuth2.0，保证用户仅需使用企业微信扫一扫便可登录，省去繁琐的注册、登录、注销操作；<br />
                3. 使用浏览器本地持久化API —— localStorage来保存用户登录状态，避免频繁扫码登录；<br />
                4. 为了方便系统扩展更多模块，使用Vue Router拆分主模块和可插拔模块，主模块提供用户信息管理、异步加载过渡动画等功能，可插拔模块有“加班晚餐订购”、“会议室预约”、“公寓管理”、“办公用品领用”等等；<br />
                5. 主模块使用Vuex存储可以被监听的全局数据，便于各个可插拔模块修改和监听共享数据；<br />
                6. 服务器选择搭设在LeanCloud云端服务器，价格便宜，且网速无限制，最重要的是提供了数据持久化API，还有提供HTTPS端口；<br />
                7. 开发测试阶段，借助webpack的热更新加快前端的页面开发，并使用Nginx代理功能来打破前后端数据调试的跨域请求限制；<br />
                8. 使用webpack异步请求模块功能，在首屏加载的时候忽略掉不常用的可插拔模块；<br />
                9. 使用css的transition、animation特性和animation.css动画库来强化用户体验，使操作更加顺滑；<br />
                10. 多次重构代码，使项目更加易维护和易阅读。<br />
              </ProjectDetails>
              <ProjectDetails title="发布地址：">
                <ResumeLink link="https://ldygo.leanapp.cn" />
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="卓望数码" titleRight="数据业务网络局数据管理平台">
            <div>
              <ProjectDetails title="介绍：">
                中国移动集团内部使用的数据业务管理系统。
              </ProjectDetails>
              <ProjectDetails title="项目任务：">
                1. 负责开发项目需求和处理现网漏洞，编写每个版本的数据库全量文档、部署说明书；<br />
                2. 主导分区域部署项目，选用Haproxy代理服务器，并配置好各区块的消息端口。
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="共济科技" titleRight="基于事件流的处理引擎">
            <div>
              <ProjectDetails title="介绍：">
                用于检测服务器的健康数据，对温度过高、湿度过高等信息进行规则匹配和处理。
              </ProjectDetails>
              <ProjectDetails title="项目任务：">
                开发一个事件流处理和复杂事件处理引擎，负责调研对比开源流引擎，考虑价格、文档是否齐全，并实现几个业务场景（重复事件、闪烁事件）。
              </ProjectDetails>
            </div>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="社区活动">
          <ResumeParagraph titleLeft="个人博客" titleRight="&nbsp;">
            <div>
              <ProjectDetails title={(<ResumeLink link="https://github.com/coconilu/Blog" description="GitHub 个人博客：" />)}>
              </ProjectDetails>
              <ProjectDetails title={(<ResumeLink link="https://codepen.io/coconilu" description="CodePen 个人主页：" />)}>
              </ProjectDetails>
              <ProjectDetails title={(<ResumeLink link="https://juejin.im/user/5ab38356518825558b3dd86e/postsu" description="掘金个人主页：" />)}>
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="翻译活动" titleRight="&nbsp;">
            <div>
              <ProjectDetails title={(<ResumeLink link="https://developer.mozilla.org/en-US/profiles/sunline.bucket" description="参与MDN翻译：" />)}>
              </ProjectDetails>
              <ProjectDetails title={(<ResumeLink link="https://github.com/coconilu/Blog/issues/36" description="参与掘金翻译计划：" />)}>
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="开源项目" titleRight="&nbsp;">
            <div>
              <ProjectDetails title={(<ResumeLink link="https://www.npmjs.com/package/@coconilu/mypromise" description="仿写Promise：" />)}>
              </ProjectDetails>
              <ProjectDetails title={(<ResumeLink link="https://www.npmjs.com/package/my-lazyload-picture" description="图片懒加载：" />)}>
              </ProjectDetails>
              <ProjectDetails title={(<ResumeLink link="https://www.npmjs.com/package/my-flip-animation" description="FLIP动画：" />)}>
              </ProjectDetails>
            </div>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="个人能力">
          <ResumeParagraph titleLeft="专业技能评估" titleRight="&nbsp;">
            <MyAbility />
          </ResumeParagraph>
          <ResumeParagraph titleLeft="钻研经验" titleRight="&nbsp;">
            <p className="self-assessment-p">1. 基于MDN官方文档和大量书籍总结过前端的开发模型</p>
            <p className="self-assessment-p">2. 乐于了解运行原理，阅读过Express、Koa、VueJS源码</p>
            <p className="self-assessment-p">3. 积极了解可以提升开发效率的工具，包括webpack、git、jest</p>
            <p className="self-assessment-p">4. 喜欢拓展视野，掌握新的技术，比如TypeScript、GraphQL、FLIP动画</p>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="自我评估">
          <ResumeParagraph titleLeft="" titleRight="&nbsp;">
            <MyMetaAbility />
          </ResumeParagraph>
        </ResumeSection>
      </article>
    );
  }
}

export default ResumeHeader;
