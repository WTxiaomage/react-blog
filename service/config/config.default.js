/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:17:10
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-01 07:50:30
 * @Description: file content
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1636964201159_4365';

  // add your middleware config here
  config.middleware = [];

  exports.mysql = {
    // database configuration
    client: {
      // host
      host: '49.235.127.70',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    // domainWhiteList: [ '*' ],
    domainWhiteList: [ 'http://127.0.0.1:4000', 'http://127.0.0.1:3000', 'http://127.0.0.1:7001' ],
  };

  config.cors = {
    // origin: 'http://127.0.0.1:3000',
    origin: ctx => ctx.get('origin'),
    credentials: true, // 允许Cookie可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
