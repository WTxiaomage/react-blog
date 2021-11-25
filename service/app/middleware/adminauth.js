/*
 * @Author: wangtao
 * @Date: 2021-11-25 22:14:53
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-25 22:53:02
 * @Description: file content
 */

'use strict';

module.exports = options => {
  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId);
    if (ctx.session.openId) {
      await next();
    } else {
      ctx.body = { data: '没有登录' };
    }
  };
};
