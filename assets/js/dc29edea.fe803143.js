"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,d=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2969:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,bgColor:r="#f1f0d8",color:a="#000000"}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"10px",color:a,padding:"0.4rem",fontWeight:700}},t)}},2086:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>y});var n=r(7462),a=r(7294),o=r(3905),s=r(2969);const l=e=>{let{src:t}=e;const[r,n]=(0,a.useState)(!1);return a.createElement("div",{className:"image-container"},r&&a.createElement("div",{className:"full-screen",onClick:()=>n(!1)},a.createElement("img",{src:t,alt:"Full Screen Image"})),a.createElement("img",{src:t,alt:"Full Screen Image",style:{cursor:"zoom-in",visibility:r?"hidden":"visible"},onClick:e=>n(!r)}))},i=r.p+"assets/images/arch-pywss-cf6cb4eff3b69e9cdd774471333bddec.png",c={title:"\u7b80\u4ecb",hide_title:!0,hide_table_of_contents:!1,slug:"/"},p=void 0,u={unversionedId:"\u7b80\u4ecb",id:"\u7b80\u4ecb",title:"\u7b80\u4ecb",description:"PyPI",source:"@site/docs/0.\u7b80\u4ecb.mdx",sourceDirName:".",slug:"/",permalink:"/pywss/",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/0.\u7b80\u4ecb.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u7b80\u4ecb",hide_title:!0,hide_table_of_contents:!1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/pywss/start"}},m={},y=[{value:"\u4ec0\u4e48\u662fPywss",id:"\u4ec0\u4e48\u662fpywss",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u5199Pywss",id:"\u4e3a\u4ec0\u4e48\u8981\u5199pywss",level:3}],d={toc:y},g="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"version",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/v/pywss?color=green",alt:"PyPI"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/codecov/c/github/czasg/pywss?token=JSXIQXY1EQ",alt:"Codecov"}))),(0,o.kt)("h3",{id:"\u4ec0\u4e48\u662fpywss"},"\u4ec0\u4e48\u662fPywss"),(0,o.kt)("p",null,"Pywss\uff08\u53d1\u97f3 /pi\u02d0wa\u026az/\uff0c\u7c7b\u4f3c ",(0,o.kt)("strong",{parentName:"p"},"p~whys"),"\uff09\u662f\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 Python Web \u6846\u67b6\uff0c\u5b83\u57fa\u4e8e Python3.6+ \u7279\u6027\u6784\u5efa\u3002"),(0,o.kt)("p",null,"\u4e0e Flask\u3001Django \u7b49\u4e3b\u6d41\u6846\u67b6\u4e0d\u540c\u7684\u662f\uff0cPywss \u7684\u5e95\u5c42\u5e76\u6ca1\u6709\u5b9e\u73b0 WSGI \u63a5\u53e3\u534f\u8bae\u3002\n\u5176\u7f16\u7a0b\u98ce\u683c\u4e5f\u66f4\u7c7b\u4f3c\u4e8e Gin\u3001Iris \u7b49\u6846\u67b6\uff0c\u56e0\u6b64\u5bf9\u4e8e\u719f\u6089\u8fd9\u4e9b\u6846\u67b6\u7684\u5f00\u53d1\u8005\u6765\u8bf4\uff0cPywss \u662f\u4e00\u4e2a\u975e\u5e38\u503c\u5f97\u63a2\u7d22\u7684\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u5176\u5173\u952e\u7279\u6027\u6709\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u7b80\u5355"),"\uff1a\u62d2\u7edd\u6d77\u91cf\u53c2\u6570\uff0c\u51cf\u5c11\u5fc3\u667a\u8d1f\u62c5\u3002\u4e86\u89e3\u4e0a\u4e0b\u6587 ",(0,o.kt)(s.Z,{mdxType:"Highlight"},"pywss.Context")," \u5373\u523b\u542f\u7a0b\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5feb\u901f"),"\uff1a\u5f15\u5165\u7ebf\u7a0b\u6c60\u673a\u5236\uff0c\u51cf\u5c11\u5e76\u53d1\u573a\u666f\u4e0b\u7ebf\u7a0b\u521b\u5efa/\u9500\u6bc1\u5f00\u9500\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u4f18\u96c5"),"\uff1a",(0,o.kt)(s.Z,{mdxType:"Highlight"},"next")," \u8bbe\u8ba1\u771f\u7684\u592a\u4f18\u96c5\u4e86\u3002\u5982\u679c\u4f60\u4e5f\u548c\u6211\u4e00\u6837\u559c\u6b22\uff0c\u90a3\u6211\u89c9\u5f97\u8fd9\u4ef6\u4e8b\u60c5\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u6cf0\u88e4\u8fa3\uff01\uff01")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6807\u51c6"),"\uff1a\u96c6\u6210\u4e86\u90e8\u5206 OpenAPI\uff08Swagger\uff09\u80fd\u529b\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u5feb\u901f\u751f\u6210 API \u6587\u6863\u5e76\u8fdb\u884c\u8c03\u8bd5\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u6d4b\u8bd5"),"\uff1a\u5f00\u7bb1\u5373\u7528\u7684 ",(0,o.kt)("strong",{parentName:"li"},"API \u6d4b\u8bd5\u6a21\u5757"),"\uff0c\u4e0d\u542f\u52a8\u670d\u52a1\u4e5f\u80fd\u6d4b\u8bd5\u63a5\u53e3\u529f\u80fd\u8fa3\uff01"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5de5\u5177\u94fe"),"\uff1a\u5f00\u7bb1\u5373\u7528\u7684\u5de5\u5177\u5e93\uff0c\u63d0\u4f9b ",(0,o.kt)("strong",{parentName:"li"},"WebSocket")," \u7b49\u80fd\u529b\u3002")),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u5199pywss"},"\u4e3a\u4ec0\u4e48\u8981\u5199Pywss"),(0,o.kt)("p",null,"Pywss \u662f\u4f5c\u8005\u5728Web\u540e\u7aef\u9886\u57df\u591a\u5e74\u5b66\u4e60\u7684\u7ecf\u9a8c\u603b\u7ed3\u4e0e\u7ed3\u6676\uff0c\u65e9\u671f\u7684 Pywss \u66f4\u504f\u5411\u4e8e Python WebSocket Server \u9886\u57df\uff0c\n\u540c\u65f6\u4e5f\u53d7\u5230\u4f5c\u8005\u65e9\u671f\u6280\u672f\u6808\u7684\u5f71\u54cd\uff0c\u5b83\u662f\u4e00\u4e2a\u5145\u65a5\u7740\u6d53\u539a Flask\u3001Django \u98ce\u683c\u7684\u6846\u67b6\u3002\n\u968f\u7740\u5de5\u4f5c\u9010\u6e10\u5f80 Go \u8f6c\u578b\u4e4b\u540e\uff0c\u4f5c\u8005\u53c8\u63a5\u89e6\u5230\u4e86\u4e0d\u5c11\u4ee4\u4eba\u773c\u524d\u4e00\u4eae\u7684\u4f18\u79c0\u540e\u7aef\u6846\u67b6\u3002\u56e0\u6b64\uff0c\u5728\u4e00\u6b21\u4e00\u6b21\u5c1d\u8bd5\u4e2d\uff0c\u8bde\u751f\u4e86\u5982\u4eca\u7684 Pywss\u3002"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u4f5c\u8005\u5bf9\u5f53\u524d\u6846\u67b6\u7248\u672c(v0.1.27)\u7684\u5e94\u7528\u751f\u547d\u5468\u671f\u67b6\u6784\u56fe"),(0,o.kt)(l,{src:i,mdxType:"AutoImage"}))}f.isMDXComponent=!0}}]);