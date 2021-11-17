/*
 * @Author: wangtao
 * @Date: 2021-11-14 11:25:16
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-17 10:41:15
 * @Description: file content
 */
import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List ,Breadcrumb} from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {
  CalendarOutlined,
  FolderViewOutlined,
  FireOutlined,
} from '@ant-design/icons'
import axios from 'axios'
import Link from 'next/link'

export default function Home(list) {
  const [mylist, setMylist] = useState(list.data)
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
          <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={(item) => (
                <List.Item>
                  <div className="list-title"><Link href={{pathname:'/detailed',query:{id:item.id}}}><a>{item.title}</a></Link></div>
                  <div className="list-icon">
                    <span>
                      <CalendarOutlined /> {item.addTime}
                    </span>
                    <span>
                      <FolderViewOutlined /> {item.typeName}
                    </span>
                    <span>
                      <FireOutlined /> {item.view_count}人
                    </span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {/* <Advert /> */}
        </Col>
      </Row>
      <Footer />
    </>
  )
}

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res)=>{
        //console.log('远程获取数据结果:',res.data.data)
        resolve(res.data)
      }
    )
  })

  return await promise
}
