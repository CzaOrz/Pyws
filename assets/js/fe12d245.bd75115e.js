"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[39],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"\u54cd\u5e94-\u6784\u9020",hide_title:!0,hide_table_of_contents:!1,slug:"response"},i=void 0,o={unversionedId:"advance/\u54cd\u5e94",id:"advance/\u54cd\u5e94",title:"\u54cd\u5e94-\u6784\u9020",description:"\u72b6\u6001\u7801",source:"@site/docs/advance/20.\u54cd\u5e94.mdx",sourceDirName:"advance",slug:"/advance/response",permalink:"/pywss/advance/response",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/advance/20.\u54cd\u5e94.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u54cd\u5e94-\u6784\u9020",hide_title:!0,hide_table_of_contents:!1,slug:"response"},sidebar:"tutorialSidebar",previous:{title:"\u8bf7\u6c42-WebSocket",permalink:"/pywss/advance/request-upgrade"},next:{title:"\u62d3\u5c55-\u4e2d\u95f4\u4ef6",permalink:"/pywss/advance/middleware"}},p={},s=[{value:"\u72b6\u6001\u7801",id:"\u72b6\u6001\u7801",level:2},{value:"\u54cd\u5e94\u5934",id:"\u54cd\u5e94\u5934",level:2},{value:"\u54cd\u5e94\u4f53",id:"\u54cd\u5e94\u4f53",level:2},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u72b6\u6001\u7801"},"\u72b6\u6001\u7801"),(0,a.kt)("p",null,"\u5728 Pywss \u4e2d\uff0c\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.set_status_code"))," \u53ef\u4ee5\u6307\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u7801"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> ctx.set_status_code(200)\n>>> ctx.set_status_code(pywss.StatusOK)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},">>> ctx.set_status_code(403)\n>>> ctx.set_status_code(pywss.StatusForbidden)\n")),(0,a.kt)("h2",{id:"\u54cd\u5e94\u5934"},"\u54cd\u5e94\u5934"),(0,a.kt)("p",null,"\u5728 Pywss \u4e2d\uff0c\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.set_header"))," \u53ef\u4ee5\u6307\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5934"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'>>> ctx.set_header("Content-Type", "application/json")\n>>> ctx.set_header("content-type", "application/json")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'>>> ctx.set_header("X-Api-Key", "api-token")\n>>> ctx.set_header("x-api-key", "api-token")\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6ce8\u610f")),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"set_header")," \u5185\u7f6e\u8f6c\u5316\u903b\u8f91\uff0c\u6545",(0,a.kt)("strong",{parentName:"p"},"\u652f\u6301 Header \u8f93\u5165\u5168\u5c0f\u5199"),"\u3002\uff08\u4e0d\u8fc7\uff0c\u4f5c\u4e3a\u4e00\u540d\u5408\u683c\u7684\u540e\u7aef\u7814\u53d1\uff0c\u4f60\u5e94\u8be5\u77e5\u9053\u8fd9\u6837\u662f\u4e0d\u5bf9\u7684\uff09"),(0,a.kt)("h2",{id:"\u54cd\u5e94\u4f53"},"\u54cd\u5e94\u4f53"),(0,a.kt)("p",null,"\u5728 Pywss \u4e2d\uff0c\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.write"))," \u53ef\u4ee5\u6307\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u6570\u636e"),"\u3002"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cctx \u63d0\u4f9b\u4e86\u591a\u79cd\u6570\u636e\u7684\u5199\u5165\u6e20\u9053\uff0c\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.write_text")),"\uff1a-"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.write_json")),"\uff1a\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"Content-Type: application/json")," \u6307\u5b9a\u54cd\u5e94\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.write_file")),"\uff1a\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},'Content-Disposition: attachment; filename="filename"')," \u6307\u5b9a\u54cd\u5e94\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.write_chunk")),"\uff1a\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"Transfer-Encoding: chunked")," \u5b9e\u73b0\u5757\uff08\u6d41\uff09\u5f0f\u54cd\u5e94")),(0,a.kt)("p",null,"\u5927\u90e8\u5206\u573a\u666f\u4e0b\uff0c\u5efa\u8bae\u4f7f\u7528\u7edf\u4e00\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ctx.write")," \u5165\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="String\u7c7b\u578b"',title:'"String\u7c7b\u578b"'},'>>> ctx.write("data")\n>>> ctx.write_text("data")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Json\u7c7b\u578b"',title:'"Json\u7c7b\u578b"'},'>>> ctx.write({"key": "value"})\n>>> ctx.write_json({"key": "value"})\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='File\u7c7b\u578b'",title:"'File\u7c7b\u578b'"},'>>> ctx.write(open("file.txt", "rb"))\n>>> ctx.write_file("file.txt")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='Chunk\u7c7b\u578b'",title:"'Chunk\u7c7b\u578b'"},'>>> ctx.write_chunk("data-chunk-1")\n>>> ctx.write_chunk("data-chunk-2")\n>>> ctx.write_chunk("data-chunk-3")\n>>> ctx.write_chunk("data-chunk-4")\n')),(0,a.kt)("h2",{id:"\u91cd\u5b9a\u5411"},"\u91cd\u5b9a\u5411"),(0,a.kt)("p",null,"\u5728 HTTP \u54cd\u5e94\u4e2d\uff0c\u91cd\u5b9a\u5411\u662f\u5e38\u89c1\u9700\u6c42\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a",(0,a.kt)("strong",{parentName:"p"},"\u72b6\u6001\u7801"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u54cd\u5e94\u5934"),"\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctx.set_status_code(302)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'ctx.set_header("Location", "/new/route")'))),(0,a.kt)("p",null,"Pywss \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u91cd\u5b9a\u5411\u529f\u80fd\uff0c\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"ctx.redirect"))," \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'>>> ctx.redirect("/")\n>>> ctx.redirect("http://github.com")\n')))}d.isMDXComponent=!0}}]);