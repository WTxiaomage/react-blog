/*
 * @Author: wangtao
 * @Date: 2021-11-17 13:58:29
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-12-02 22:13:22
 * @Description: file content
 */
// let ipUrl = 'http://127.0.0.1:7001/admin/' //开发
let ipUrl = 'http://49.235.127.70:7001/admin/' //生产
let servicePath = {
    getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获得文章类别信息
    addArticle:ipUrl + 'addArticle' ,  //  添加文章
    updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
    checkLogin:ipUrl + 'checkLogin' ,  //  检查用户名密码是否正确
    getArticleList:ipUrl + 'getArticleList' ,  //  文章列表 
    delArticle:ipUrl + 'delArticle/' ,  //  删除文章
    getArticleById:ipUrl + 'getArticleById/' ,  //  根据ID获得文章详情
}

export default servicePath;