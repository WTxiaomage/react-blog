/*
 * @Author: wangtao
 * @Date: 2021-11-15 14:39:24
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-18 10:20:49
 * @Description: 公共头部
 */
import React, { useState, useEffect } from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons'

import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo).then((res) => {
        setNavArray(res.data.data)
        return res.data.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])

  //跳转到列表页
  const handleClick = (e) => {
    if (e.key == 0) {
      Router.push('/')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }
  //
  const _renderIcon = (key) => {
    switch (key) {
      case 'youtube':
        return <YoutubeOutlined />
      case 'message':
        return <SmileOutlined />
      case 'smile':
        return <SmileOutlined />

      default:
        break
    }
  }
  return (
    <div className="header">
      <Row type="flex" justify="center">
      <Col  xs={24} sm={24} md={10} lg={13} xl={11}>
          <span className="header-logo">技术胖</span>
          <span className="header-txt">专注前端开发,每年100集免费视频。</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
          <Menu mode="horizontal"  onClick={handleClick}>
            <Menu.Item key={0}>
              <HomeOutlined />
              首页
            </Menu.Item>
            {navArray.map((item) => {
              return (
                <Menu.Item key={item.id}>
                  {_renderIcon(item.icon)}
                  {item.typeName}
                </Menu.Item>
              )
            })}
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
