import '../styles/globals.css'
// antd的样式
import 'antd/dist/antd.css'
import 'markdown-navbar/dist/navbar.css';
//自定义组件样式
import '../styles/components/header.css'
import '../styles/components/author.css'
import '../styles/components/advert.css'
import '../styles/components/footer.css'
//自定义页面样式
import '../styles/pages/index.css'
import '../styles/pages/detailed.css'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
