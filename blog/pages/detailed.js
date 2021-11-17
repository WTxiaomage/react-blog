/*
 * @Author: wangtao
 * @Date: 2021-11-14 11:25:16
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-17 11:35:10
 * @Description: file content
 */


import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, Affix, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import {
  CalendarOutlined,
  FolderViewOutlined,
  FireOutlined,
} from '@ant-design/icons'
import axios from 'axios'
import { marked } from 'marked'
import hljs from 'highlight.js'
import Tocify from '../components/tocify.tsx'
export default function Detailed(props) {
  const renderer = new marked.Renderer()
  const tocify = new Tocify()
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    },
  })

  let html = marked(props.article_content)
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <a href="/">首页</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                React实战视频教程-技术胖Blog开发(更新08集)
              </div>

              <div className="list-icon center">
                <span>
                  <CalendarOutlined /> 2019-06-28
                </span>
                <span>
                  <FolderViewOutlined /> 视频教程
                </span>
                <span>
                  <FireOutlined /> 5498人
                </span>
              </div>

              <div className="detailed-content"  
                  dangerouslySetInnerHTML = {{__html:html}}   >
                </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">{tocify && tocify.render()}</div>
           
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Detailed.getInitialProps = async (context) => {
  console.log(context)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleById/' + id).then((res) => {
      resolve(res.data.data[0])
    })
  })

  return await promise
}
