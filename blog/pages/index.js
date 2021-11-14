/*
 * @Author: wangtao
 * @Date: 2021-11-14 11:25:16
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-14 11:57:48
 * @Description: file content
 */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button} from 'antd'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div><Button>我是按钮</Button></div>
    </>
  )
}
