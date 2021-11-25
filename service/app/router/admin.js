/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:38:24
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-25 22:25:11
 * @Description: file content
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  const adminauth = app.middleware.adminauth();
  router.get('/admin/index', controller.admin.main.index);
  router.post('/admin/checkLogin', controller.admin.main.checkLogin);

  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo);
};
