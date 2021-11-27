/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:38:24
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-27 16:34:01
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
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle);
  router.post('/admin/updateArticle', adminauth, controller.admin.main.updateArticle);
  router.get('/admin/getArticleList', adminauth, controller.admin.main.getArticleList);
  router.get('/admin/delArticle/:id', adminauth, controller.admin.main.delArticle);
  router.get('/admin/getArticleById/:id', adminauth, controller.admin.main.getArticleById);
};
