/*
 * @Author: wangtao
 * @Date: 2021-11-17 13:58:29
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-27 14:59:30
 * @Description: file content
 */
let ipUrl = 'http://127.0.0.1:7001/admin/' 

let servicePath = {
    getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获得文章类别信息
    addArticle:ipUrl + 'addArticle' ,  //  添加文章
    updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
    checkLogin:ipUrl + 'checkLogin' ,  //  检查用户名密码是否正确
}

export default servicePath;