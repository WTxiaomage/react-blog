(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{155:function(e,t,a){e.exports=a(259)},161:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=a(111),o=a(18),s=a(21),m=(a(160),a(269)),d=a(144),u=a(264),p=a(266),E=a(8),g=a(45),h=(a(161),a(37)),f=a.n(h),b="http://49.235.127.70:7001/admin/",y={getTypeInfo:b+"getTypeInfo",addArticle:b+"addArticle",updateArticle:b+"updateArticle",checkLogin:b+"checkLogin",getArticleList:b+"getArticleList",delArticle:b+"delArticle/",getArticleById:b+"getArticleById/"};var v=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),h=o[0],b=o[1],v=Object(n.useState)(!1),O=Object(s.a)(v,2),j=O[0],k=O[1];return r.a.createElement("div",{className:"login-div"},r.a.createElement(d.a,{tip:"Loading...",spinning:j},r.a.createElement(u.a,{title:"JSPang Blog  System",bordered:!0,style:{width:400}},r.a.createElement(p.a,{id:"userName",size:"large",placeholder:"Enter your userName",prefix:r.a.createElement(E.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),onChange:function(e){c(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a.Password,{id:"password",size:"large",placeholder:"Enter your password",prefix:r.a.createElement(E.a,{type:"key",style:{color:"rgba(0,0,0,.25)"}}),onChange:function(e){b(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(g.a,{type:"primary",size:"large",block:!0,onClick:function(){if(k(!0),!l)return m.a.error("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"),!1;if(!h)return m.a.error("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"),!1;var t={userName:l,password:h};f()({method:"post",url:y.checkLogin,data:t,withCredentials:!0}).then((function(t){k(!1),console.log("\ud83d\ude80\ud83d\ude80\ud83d\ude80wimi======>>>res",t),"\u767b\u5f55\u6210\u529f"===t.data.data?(localStorage.setItem("openId",t.data.openId),e.history.push("/index")):m.a.error("\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef")})),setTimeout((function(){k(!1)}),1e3)}}," Login in "))))},O=a(262),j=a(115),k=a(268),S=(a(245),a(53)),I=(a(246),a(73)),w=a(63),A=a(36),C=a(263),x=I.a.Option,N=p.a.TextArea;var L=function(e){var t=Object(n.useState)(0),a=Object(s.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),d=o[0],u=o[1],E=Object(n.useState)(""),h=Object(s.a)(E,2),b=h[0],v=h[1],O=Object(n.useState)("\u9884\u89c8\u5185\u5bb9"),j=Object(s.a)(O,2),k=j[0],L=j[1],T=Object(n.useState)(),_=Object(s.a)(T,2),z=_[0],B=_[1],H=Object(n.useState)("\u7b49\u5f85\u7f16\u8f91"),M=Object(s.a)(H,2),P=M[0],J=M[1],K=Object(n.useState)(),D=Object(s.a)(K,2),F=D[0],R=D[1],V=Object(n.useState)(),q=Object(s.a)(V,2),G=(q[0],q[1],Object(n.useState)([])),Q=Object(s.a)(G,2),U=Q[0],W=Q[1],X=Object(n.useState)("\u9009\u62e9\u6587\u7ae0\u7c7b\u522b"),Y=Object(s.a)(X,2),Z=Y[0],$=Y[1];S.marked.setOptions({renderer:S.marked.Renderer(),gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!1,smartLists:!0,smartypants:!1});var ee=function(e){v(e.target.value);var t=Object(S.marked)(e.target.value);L(t)},te=function(e){B(e.target.value);var t=Object(S.marked)(e.target.value);J(t)};Object(n.useEffect)((function(){ae();var t=e.match.params.id;t&&(c(t),ne(t))}),[]);var ae=function(){f()({method:"get",url:y.getTypeInfo,withCredentials:!0}).then((function(t){"\u6ca1\u6709\u767b\u5f55"===t.data.data?(localStorage.removeItem("openId"),e.history.push("/")):W(t.data.data)}))},ne=function(e){f()(y.getArticleById+e,{withCredentials:!0,header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){u(e.data.data[0].title),v(e.data.data[0].article_content);var t=Object(S.marked)(e.data.data[0].article_content);L(t),B(e.data.data[0].introduce);var a=Object(S.marked)(e.data.data[0].introduce);J(a),R(e.data.data[0].addTime),$(e.data.data[0].typeId)}))};return r.a.createElement("div",null,r.a.createElement(w.a,{gutter:5},r.a.createElement(A.a,{span:18},r.a.createElement(w.a,{gutter:10},r.a.createElement(A.a,{span:16},r.a.createElement(p.a,{value:d,placeholder:"\u535a\u5ba2\u6807\u9898",onChange:function(e){u(e.target.value)},size:"large"})),r.a.createElement(A.a,{span:4},"\xa0",r.a.createElement(I.a,{defaultValue:Z,size:"large",onChange:function(e){$(e)}},U.map((function(e,t){return r.a.createElement(x,{key:t,value:e.id},e.typeName)}))))),r.a.createElement("br",null),r.a.createElement(w.a,{gutter:10},r.a.createElement(A.a,{span:12},r.a.createElement(N,{value:b,className:"markdown-content",rows:35,onChange:ee,onPressEnter:ee,placeholder:"\u6587\u7ae0\u5185\u5bb9"})),r.a.createElement(A.a,{span:12},r.a.createElement("div",{className:"show-html",dangerouslySetInnerHTML:{__html:k}})))),r.a.createElement(A.a,{span:6},r.a.createElement(w.a,null,r.a.createElement(A.a,{span:24},r.a.createElement(g.a,{size:"large"},"\u6682\u5b58\u6587\u7ae0"),"\xa0",r.a.createElement(g.a,{type:"primary",size:"large",onClick:function(){if(!Z)return m.a.error("\u5fc5\u987b\u9009\u62e9\u6587\u7ae0\u7c7b\u522b"),!1;if(!d)return m.a.error("\u6587\u7ae0\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"),!1;if(!b)return m.a.error("\u6587\u7ae0\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a"),!1;if(!z)return m.a.error("\u7b80\u4ecb\u4e0d\u80fd\u4e3a\u7a7a"),!1;if(!F)return m.a.error("\u53d1\u5e03\u65e5\u671f\u4e0d\u80fd\u4e3a\u7a7a"),!1;var e={};e.type_id=Z,e.title=d,e.article_content=b,e.introduce=z;var t=F.replace("-","/");e.addTime=new Date(t).getTime()/1e3,0==l?(console.log("articleId=:"+l),e.view_count=Math.ceil(100*Math.random())+1e3,f()({method:"post",url:y.addArticle,data:e,withCredentials:!0}).then((function(e){c(e.data.insertId),e.data.isScuccess?m.a.success("\u6587\u7ae0\u4fdd\u5b58\u6210\u529f"):m.a.error("\u6587\u7ae0\u4fdd\u5b58\u5931\u8d25")}))):(e.id=l,f()({method:"post",url:y.updateArticle,header:{"Access-Control-Allow-Origin":"*"},data:e,withCredentials:!0}).then((function(e){e.data.isScuccess?m.a.success("\u6587\u7ae0\u4fdd\u5b58\u6210\u529f"):m.a.error("\u4fdd\u5b58\u5931\u8d25")})))}},"\u53d1\u5e03\u6587\u7ae0"),r.a.createElement("br",null)),r.a.createElement(A.a,{span:24},r.a.createElement("br",null),r.a.createElement(N,{rows:4,value:z,onChange:te,onPressEnter:te,placeholder:"\u6587\u7ae0\u7b80\u4ecb"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"introduce-html",dangerouslySetInnerHTML:{__html:"\u6587\u7ae0\u7b80\u4ecb\uff1a"+P}})),r.a.createElement(A.a,{span:12},r.a.createElement("div",{className:"date-select"},r.a.createElement(C.a,{onChange:function(e,t){return R(t)},placeholder:"\u53d1\u5e03\u65e5\u671f",size:"large"})))))))},T=(a(257),a(267)),_=a(265),z=T.a.confirm;var B=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],c=a[1];Object(n.useEffect)((function(){i()}),[]);var i=function(){f()({method:"get",url:y.getArticleList,withCredentials:!0,header:{"Access-Control-Allow-Origin":"*"}}).then((function(e){c(e.data.list)}))};return r.a.createElement("div",null,r.a.createElement(_.a,{header:r.a.createElement(w.a,{className:"list-div"},r.a.createElement(A.a,{span:8},r.a.createElement("b",null,"\u6807\u9898")),r.a.createElement(A.a,{span:3},r.a.createElement("b",null,"\u7c7b\u522b")),r.a.createElement(A.a,{span:3},r.a.createElement("b",null,"\u53d1\u5e03\u65f6\u95f4")),r.a.createElement(A.a,{span:3},r.a.createElement("b",null,"\u96c6\u6570")),r.a.createElement(A.a,{span:3},r.a.createElement("b",null,"\u6d4f\u89c8\u91cf")),r.a.createElement(A.a,{span:4},r.a.createElement("b",null,"\u64cd\u4f5c"))),bordered:!0,dataSource:l,renderItem:function(e){return r.a.createElement(_.a.Item,null,r.a.createElement(w.a,{className:"list-div"},r.a.createElement(A.a,{span:8},e.title),r.a.createElement(A.a,{span:3},e.typeName),r.a.createElement(A.a,{span:3},e.addTime),r.a.createElement(A.a,{span:3},"\u5171",r.a.createElement("span",null,e.part_count),"\u96c6"),r.a.createElement(A.a,{span:3},e.view_count),r.a.createElement(A.a,{span:4},r.a.createElement(g.a,{type:"primary"},"\u4fee\u6539"),"\xa0",r.a.createElement(g.a,{onClick:function(){var t;t=e.id,z({title:"\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u7bc7\u535a\u5ba2\u6587\u7ae0\u5417?",content:"\u5982\u679c\u4f60\u70b9\u51fbOK\u6309\u94ae\uff0c\u6587\u7ae0\u5c06\u4f1a\u6c38\u8fdc\u88ab\u5220\u9664\uff0c\u65e0\u6cd5\u6062\u590d\u3002",onOk:function(){f()(y.delArticle+t,{withCredentials:!0}).then((function(e){m.a.success("\u6587\u7ae0\u5220\u9664\u6210\u529f"),i()}))},onCancel:function(){m.a.success("\u6ca1\u6709\u4efb\u4f55\u6539\u53d8")}})}},"\u5220\u9664"," "))))}}))},H=O.a.Header,M=O.a.Content,P=O.a.Footer,J=O.a.Sider,K=j.a.SubMenu;var D=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],c=a[1];return r.a.createElement(O.a,{style:{minHeight:"100vh"}},r.a.createElement(J,{collapsible:!0,collapsed:l,onCollapse:function(e){c(e)}},r.a.createElement("div",{className:"logo"}),r.a.createElement(j.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(j.a.Item,{key:"1"},r.a.createElement(E.a,{type:"pie-chart"}),r.a.createElement("span",null,"\u5de5\u4f5c\u53f0")),r.a.createElement(j.a.Item,{key:"2"},r.a.createElement(E.a,{type:"desktop"}),r.a.createElement("span",null,"\u6dfb\u52a0\u6587\u7ae0")),r.a.createElement(K,{key:"sub1",onClick:function(t){console.log(t.item.props),"addArticle"===t.key?e.history.push("/index/add"):e.history.push("/index/list")},title:r.a.createElement("span",null,r.a.createElement(E.a,{type:"desktop"}),r.a.createElement("span",null,"\u6587\u7ae0\u7ba1\u7406"))},r.a.createElement(j.a.Item,{key:"addArticle"},"\u6dfb\u52a0\u6587\u7ae0"),r.a.createElement(j.a.Item,{key:"articleList"},"\u6587\u7ae0\u5217\u8868")),r.a.createElement(j.a.Item,{key:"9"},r.a.createElement(E.a,{type:"file"}),r.a.createElement("span",null,"\u7559\u8a00\u7ba1\u7406")))),r.a.createElement(O.a,null,r.a.createElement(H,{style:{background:"#fff",padding:0}}),r.a.createElement(M,{style:{margin:"0 16px"}},r.a.createElement(k.a,{style:{margin:"16px 0"}},r.a.createElement(k.a.Item,null,"\u540e\u53f0\u7ba1\u7406"),r.a.createElement(k.a.Item,null,"\u5de5\u4f5c\u53f0")),r.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},r.a.createElement("div",null,r.a.createElement(o.a,{path:"/index/",exact:!0,component:L}),r.a.createElement(o.a,{path:"/index/add/",exact:!0,component:L}),r.a.createElement(o.a,{path:"/index/add/:id",exact:!0,component:L}),r.a.createElement(o.a,{path:"/index/list/",component:B})))),r.a.createElement(P,{style:{textAlign:"center"}},"JSPang.com")))};var F=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{path:"/login/",exact:!0,component:v}),r.a.createElement(o.a,{path:"/index/",component:D}))};c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.21cc2495.chunk.js.map