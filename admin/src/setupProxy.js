/*
 * @Author: wangtao
 * @Date: 2021-11-30 22:42:48
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-30 22:51:09
 * @Description: file content
 */
const {createProxyMiddleware} = require('http-proxy-middleware');
//1.0.0版本前都是用proxy,1.0.0后使用porxy会报错,应使用createProxyMiddleware;
module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware(
  //         'http://127.0.0.1:7001/admin',
  //         {
  //           target: 'http://127.0.0.1:7001/admin',
  //           // pathRewrite: {'^/admin' : ''},
  //           changeOrigin: true,     // target是域名的话，需要这个参数，
  //           secure: false,    
  //         }
  //     )
  // );
};