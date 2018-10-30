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
            <p>1. 负责完善和维护公司内部的流程系统（BPM）</p>
            <p>2. 负责设计和开发公司内部的“员工自助系统”</p>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="2016.08-2017.02" titleRight="卓望数码技术深圳有限公司／研发事业部">
            <p>1. 开发维护网络局数据项目，编写部署说明书指导运维部同事安装升级系统</p>
            <p>2. 主导使用Haproxy代理服务器分区域部署原项目。</p>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="2015.09-2016.07" titleRight="深圳市共济科技股份有限公司／研发部">
            <p>1. 调研Esper、Drools和StreamBase开源流引擎，与师兄合作开发一个事件流处理和复杂事件处理引擎</p>
            <p>2. 开发一个微信后台，用以及时推送重要（如机房预警、告警）消息给用户。</p>
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="项目经验">
          <ResumeParagraph titleLeft="联动云" titleRight="员工自助平台">
            <div>
              <ProjectDetails title="背景：">
                发起该项目的原因是公司处于初期阶段，内部系统不健全。刚开始仅是一个订晚餐的系统，后来多了会议室预定的系统。同事们都觉得不错。于是我做了一个决定，把它们汇集起来做成一个平台——员工自助平台。
              </ProjectDetails>
              <ProjectDetails title="架构：">
                使用典型的B/S架构。<br />
                类似小程序平台，主模块提供了账号鉴权、异步加载动画功能，可以不断新增业务模块，目前已经有如下模块：<br />
                &nbsp;&nbsp;&nbsp;&nbsp;1. 加班晚餐订购<br />
                &nbsp;&nbsp;&nbsp;&nbsp;2. 会议室预约<br />
                &nbsp;&nbsp;&nbsp;&nbsp;3. 公寓管理<br />
                &nbsp;&nbsp;&nbsp;&nbsp;4. 办公用品领用<br />
                对接了企业微信的通讯录管理API，免去用户创建账号的麻烦，仅需要使用手机版企业微信扫一扫便可以登录。<br />
                运行在LeanCloud提供的云端服务器上面的，调用了LeanCloud的数据处理功能，一切都运行在HTTPS协议上，可以保证数据安全。
              </ProjectDetails>
              <ProjectDetails title="技术选型：">
                基于NodeJS（Express）、VueJS、iView、axios编写而成。
              </ProjectDetails>
              <ProjectDetails title="承担任务：">
                1. 确定技术选型，保证项目的可行性和可快速开发迭代性；<br />
                2. 设计架构，划分模块，使各模块职责分明；<br />
                3. 调试和打通和企业微信API、LeanCloud API连接；<br />
                4. 重构多次，增加项目可维护性和易读性；<br />
                5. 调研Nginx并用于开发测试阶段，加快项目进度。
              </ProjectDetails>
              <ProjectDetails title="成品地址：">
                <ResumeLink link="https://ldygo.leanapp.cn" />
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="开源社区" titleRight="iGitStar">
            <div>
              <ProjectDetails title="背景：">
                iGitStar 是管理 GitHub stars 的辅助工具， 对于经常需要翻阅 stars 或者借助 stars 学习的用户非常适用，它可以帮你置顶你喜欢的 star 项目。<br />
                这也算是贡献给社区的一个项目。
              </ProjectDetails>
              <ProjectDetails title="架构：">
                实现轻量级的架构，仅使用Koa提供网页资源；<br />
                调用浏览器的本地持久化API储存用户的信息；<br />
                对接GitHub开发者文档提供的获取数据API。<br />
              </ProjectDetails>
              <ProjectDetails title="技术选型：">
                仅基于NodeJS（Koa）、VueJS、axios编写，尽可能减少第三方依赖，实现轻量级的服务。
              </ProjectDetails>
              <ProjectDetails title="承担任务：">
                页面设计，添加了很多交互元素，让页面更加人性化；<br />
                使用流行的骨架屏作为异步加载动画；<br />
                提供类似“下滑刷新”的功能，节省流量。
              </ProjectDetails>
              <ProjectDetails title="难点：">
                设计骨架屏；<br />
                用防抖模式设计“下滑刷新”
              </ProjectDetails>
              <ProjectDetails title="成品地址：">
                <ResumeLink link="https://igitstar.leanapp.cn" />
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="卓望数码" titleRight="数据业务网络局数据管理平台">
            <div>
              <ProjectDetails title="介绍：">
                中国移动集团内部使用的数据业务管理系统。
              </ProjectDetails>
              <ProjectDetails title="承担任务：">
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
              <ProjectDetails title="承担任务：">
                开发一个事件流处理和复杂事件处理引擎，负责调研对比开源流引擎，考虑价格、文档是否齐全，并实现几个业务场景（重复事件、闪烁事件），最后写成演讲稿请示领导。
              </ProjectDetails>
            </div>
          </ResumeParagraph>
          <ResumeParagraph titleLeft="共济科技" titleRight="微信告警平台">
            <div>
              <ProjectDetails title="介绍：">
                基于微信平台把机房预警、告警信息推送给业主。
              </ProjectDetails>
              <ProjectDetails title="承担任务：">
                在学长的帮助下，使用微信平台提供的API实现：收集预警、告警信息，并推送给匹配的业主。
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
              <ProjectDetails title={(<ResumeLink link="https://juejin.im/user/5ab38356518825558b3dd86e/postsu" description="掘进个人首页：" />)}>
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
          <ResumeParagraph titleLeft="个人素质评估" titleRight="&nbsp;">
            <MyMetaAbility />
          </ResumeParagraph>
        </ResumeSection>
        <ResumeSection title="自我评价">
          <ResumeParagraph titleLeft="" titleRight="">
            <p className="self-assessment-p">基础踏实，学习能力顽强，可以应付许多新技术</p>
            <p className="self-assessment-p">社交能力良好，能与不同性别、不同性格的人友好相处</p>
            <p className="self-assessment-p">工作抗压能力良好，可以抗住突发性的高强度加班事件</p>
          </ResumeParagraph>
        </ResumeSection>
      </article>
    );
  }
}

export default ResumeHeader;
