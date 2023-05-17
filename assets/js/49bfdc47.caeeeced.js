"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||p;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const p={title:"\u8def\u7531-\u5339\u914d\u673a\u5236",hide_title:!0,hide_table_of_contents:!1,slug:"route-match"},l=void 0,o={unversionedId:"advance/\u8def\u7531-\u5339\u914d\u673a\u5236",id:"advance/\u8def\u7531-\u5339\u914d\u673a\u5236",title:"\u8def\u7531-\u5339\u914d\u673a\u5236",description:"\u6211\u4eec\u5e38\u8bf4\u7684 \u5339\u914d\u673a\u5236 \u6709\uff1a",source:"@site/docs/advance/5.\u8def\u7531-\u5339\u914d\u673a\u5236.mdx",sourceDirName:"advance",slug:"/advance/route-match",permalink:"/pywss/advance/route-match",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/advance/5.\u8def\u7531-\u5339\u914d\u673a\u5236.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u8def\u7531-\u5339\u914d\u673a\u5236",hide_title:!0,hide_table_of_contents:!1,slug:"route-match"},sidebar:"tutorialSidebar",previous:{title:"\u8def\u7531-\u6ce8\u518c",permalink:"/pywss/advance/route-register"},next:{title:"\u8def\u7531-\u7ec4",permalink:"/pywss/advance/route-group"}},i={},s=[{value:"\u5c40\u90e8\u5339\u914d - \u8def\u5f84\u53c2\u6570",id:"\u5c40\u90e8\u5339\u914d---\u8def\u5f84\u53c2\u6570",level:2},{value:"\u5934\u90e8\u5339\u914d",id:"\u5934\u90e8\u5339\u914d",level:2}],m={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u4ec0\u4e48\u662f\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236\uff1f",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5e38\u8bf4\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u5339\u914d\u673a\u5236")," \u6709\uff1a"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5168\u7b49\u5339\u914d\uff1a\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u5934\u90e8\u5339\u914d\uff1a\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u5c3e\u90e8\u5339\u914d\uff1a\u7565"),(0,a.kt)("li",{parentName:"ul"},"\u5c40\u90e8\u5339\u914d\uff1a\u5339\u914d\u5c40\u90e8\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u6b63\u5219\u5339\u914d\uff1a\u901a\u8fc7\u6b63\u5219\u8fdb\u884c\u5339\u914d")),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8def\u7531\u7ba1\u7406\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5305\u542b\u591a\u79cd\u5339\u914d\u6a21\u5f0f"),"\u7684\u673a\u5236\u6211\u4eec\u90fd\u79f0\u4e4b\u4e3a\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236")," \u662f\u73b0\u4ee3 web \u6846\u67b6\u5fc5\u4e0d\u53ef\u5c11\u7684\u7279\u70b9\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5927\u591a\u6570\u7684\u6846\u67b6\u800c\u8a00\uff0c\u5b83\u4eec\u90fd\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u5219\u5339\u914d"),"\uff0c\u867d\u7136\u8fd9\u4f1a\u5e26\u6765\u66f4\u4e30\u5bcc\u7684\u80fd\u529b\uff0c\u4f46\u8fd9\u65e0\u7591\u4e5f\u4f1a\u5f15\u5165\u4e00\u5b9a\u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,a.kt)("p",null,"Pywss \u901a\u8fc7\u66f4\u7b80\u5355\u3001\u6613\u61c2\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e86\u4e09\u79cd\u8def\u7531\u5339\u914d\u673a\u5236\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u7279\u6b8a\u8def\u7531\u5339\u914d\u673a\u5236"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5168\u7b49\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'app.get("/full/match", handler)'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5c40\u90e8\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'app.get("/partial/match/{name}", handler)'),"\uff0c\u6ce8\u610f\uff0c\u5c40\u90e8\u53d8\u91cf\u4f1a\u5b58\u50a8\u5728",(0,a.kt)("inlineCode",{parentName:"td"},"ctx.route_params"),"\u4e2d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5934\u90e8\u5339\u914d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'app.get("/head/match/*", handler)'),"\uff0c\u6ce8\u610f\uff0c\u6b64\u5904\u9700\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"td"},"*")," \u7ed3\u5c3e")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6ce8\u610f")),"\uff1a\n\u4e0a\u8ff0\u5339\u914d\u673a\u5236\u65e0\u6cd5\u540c\u65f6\u751f\u6548\uff0c\u4e14\u5b58\u5728\u4f18\u5148\u7ea7\uff0c\u5373 ",(0,a.kt)("strong",{parentName:"p"},"\u5168\u7b49\u5339\u914d")," > ",(0,a.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u5339\u914d")," > ",(0,a.kt)("strong",{parentName:"p"},"\u5934\u90e8\u5339\u914d")),(0,a.kt)("h2",{id:"\u5c40\u90e8\u5339\u914d---\u8def\u5f84\u53c2\u6570"},"\u5c40\u90e8\u5339\u914d - \u8def\u5f84\u53c2\u6570"),(0,a.kt)("p",null,"Pywss \u5728\u8def\u7531\u914d\u7f6e\u65f6\uff0c\u901a\u8fc7\u4e2d\u62ec\u53f7\u53ef\u4ee5\u6307\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u5339\u914d"),"\u3002"),(0,a.kt)("p",null,"\u5728\u6307\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u5339\u914d")," \u540e\u4f1a\u751f\u6210 ",(0,a.kt)("strong",{parentName:"p"},'"\u8def\u5f84\u53c2\u6570"'),"\uff0c\u6b64\u53c2\u6570\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.route_params")," \u4e2d\u83b7\u53d6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u83b7\u53d6\u8def\u5f84\u53c2\u6570"',title:'"\u83b7\u53d6\u8def\u5f84\u53c2\u6570"'},'import pywss\n\ndef hello(ctx: pywss.Context):\n    name = ctx.route_params["name"]\n    ctx.write({"hello": name})\n\napp = pywss.App()\napp.get("/hello/{name}", hello)\napp.run()\n')),(0,a.kt)("p",null,"\u53d7\u9650\u4e8e\u5b9e\u73b0\u673a\u5236\uff0c\u5728\u5c40\u90e8\u5339\u914d\u4e2d",(0,a.kt)("strong",{parentName:"p"},"\u6682\u4e0d\u652f\u6301\u5bf9\u7c7b\u578b\u7684\u6821\u9a8c"),"\u3002"),(0,a.kt)("h2",{id:"\u5934\u90e8\u5339\u914d"},"\u5934\u90e8\u5339\u914d"),(0,a.kt)("p",null,"Pywss \u5728\u8def\u7531\u5339\u914d\u65f6\uff0c\u901a\u8fc7\u5728\u5c3e\u90e8\u914d\u7f6e ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"*"))," \u53ef\u4ee5\u6307\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"\u5934\u90e8\u5339\u914d"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="\u5934\u90e8\u5339\u914d"',title:'"\u5934\u90e8\u5339\u914d"'},'import pywss\n\ndef hello(ctx: pywss.Context):\n    name = ctx.route.replace("/hello", "", 1)\n    ctx.write({"hello": name})\n\napp = pywss.App()\napp.get("/hello/*", hello)\napp.run()\n')),(0,a.kt)("p",null,"\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c\u4efb\u610f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"/route/")," \u5f00\u5934\u7684\u8def\u7531\u5747\u53ef\u4ee5\u547d\u4e2d\u6b64\u8def\u7531\u3002"))}u.isMDXComponent=!0}}]);