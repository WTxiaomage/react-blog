/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:38:24
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-25 21:15:12
 * @Description: file content
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/index', controller.admin.main.index);
  router.get('/admin/checkOpenId', controller.admin.main.checkLogin);
};
