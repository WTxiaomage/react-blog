/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:17:10
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-17 10:47:58
 * @Description: file content
 */
'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
//   mysql = {
//   enable: true,
//   package: 'egg-mysql'
// };
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
