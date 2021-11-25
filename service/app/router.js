/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:17:10
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-25 19:36:44
 * @Description: file content
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  require('./router/default')(app);
  require('./router/admin')(app);
};
