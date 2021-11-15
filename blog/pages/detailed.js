/*
 * @Author: wangtao
 * @Date: 2021-11-15 15:12:30
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-15 15:12:54
 * @Description: file content
 */

import React from 'react'
import Head from 'next/head'
import {Row, Col} from 'antd'
import Header from '../components/Header'
const Detailed = () => (
  <>
    <Head>
      <title>Detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
        左侧
      </Col>

      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧
      </Col>
    </Row>

 </>
)

export default Detailed