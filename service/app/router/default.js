/*
 * @Author: wangtao
 * @Date: 2021-11-15 16:38:24
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-17 10:51:48
 * @Description: file content
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById);
};
