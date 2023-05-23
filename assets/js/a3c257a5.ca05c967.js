"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),h=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var h=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(p(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},5602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(4866),o=n(5162);const s={title:"\u9759\u6001\u6587\u4ef6\u670d\u52a1",hide_title:!1,hide_table_of_contents:!1,slug:"static-file"},i=void 0,u={unversionedId:"advance/\u9759\u6001\u6587\u4ef6\u670d\u52a1",id:"advance/\u9759\u6001\u6587\u4ef6\u670d\u52a1",title:"\u9759\u6001\u6587\u4ef6\u670d\u52a1",description:"Pywss \u901a\u8fc7 app.static \u5b9e\u73b0\u4e86\u7b80\u5355\u7684\u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668\u3002\u5176\u539f\u7406\u57fa\u4e8e\u5934\u90e8\u5339\u914d\u673a\u5236\u5b9e\u73b0\uff08\u4e0d\u6e05\u695a\u7684\u540c\u5b66\u89c1\u8def\u7531\u5339\u914d\u673a\u5236\uff09\u3002",source:"@site/docs/advance/60.\u9759\u6001\u6587\u4ef6\u670d\u52a1.mdx",sourceDirName:"advance",slug:"/advance/static-file",permalink:"/pywss/advance/static-file",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/advance/60.\u9759\u6001\u6587\u4ef6\u670d\u52a1.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"\u9759\u6001\u6587\u4ef6\u670d\u52a1",hide_title:!1,hide_table_of_contents:!1,slug:"static-file"},sidebar:"tutorialSidebar",previous:{title:"\u89c6\u56fe\u673a\u5236",permalink:"/pywss/advance/app-view"},next:{title:"SwaggerUI",permalink:"/pywss/advance/swagger-ui"}},c={},p=[],m={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Pywss \u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"app.static"))," \u5b9e\u73b0\u4e86\u7b80\u5355\u7684\u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668\u3002\u5176\u539f\u7406\u57fa\u4e8e",(0,a.kt)("strong",{parentName:"p"},"\u5934\u90e8\u5339\u914d\u673a\u5236"),"\u5b9e\u73b0\uff08\u4e0d\u6e05\u695a\u7684\u540c\u5b66\u89c1\u8def\u7531\u5339\u914d\u673a\u5236\uff09\u3002"),(0,a.kt)("p",null,"\u5728\u6b64\u65b9\u6cd5\u4e2d\uff0c\u9700\u8981\u7279\u522b\u6ce8\u610f\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"route"),"\uff1a\u8def\u7531\u524d\u7f00\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rootDir"),"\uff1a\u9759\u6001\u6587\u4ef6\u76ee\u5f55\u3002")),(0,a.kt)("admonition",{title:"\u6839\u76ee\u5f55",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"rootDir")," \u6307\u5b9a\u76ee\u5f55\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u6839\u76ee\u5f55"),"\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8bf7\u6c42\u5230\u6765\u65f6\uff0cPywss \u9996\u5148\u5c06 URL \u5254\u9664\u8def\u7531\u524d\u7f00\uff0c\u7136\u540e\u5c06\u5269\u4f59\u8def\u7531\u4f5c\u4e3a\u6587\u4ef6\u4f4d\u7f6e\uff0c\u5728\u6839\u76ee\u5f55\u4e2d\u8fdb\u884c\u67e5\u627e\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\uff0c\u901a\u8fc7\u4e00\u4e2a\u6848\u4f8b\u6765\u642d\u5efa\u4e00\u4e2a\u9759\u6001\u6587\u4ef6\u670d\u52a1\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u9879\u76ee\u7ed3\u6784"',title:'"\u9879\u76ee\u7ed3\u6784"'},"- static/\n  - css/\n    style.css\n  - js/\n    jquery.js\n  index.html\nmain.py\n")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"main.py",label:"main.py",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import pywss\n\ndef main():\n    app = pywss.App()\n    app.get("/", lambda ctx: ctx.redirect("/static/index.html")\n    app.static("/static", rootDir="./static")\n    app.run()\n\nif __name__ == \'__main__\':\n    """\n    http://localhost:8080/static/index.html\n    """\n    main()\n'))),(0,a.kt)(o.Z,{value:"index.html",label:"index.html",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"showLineNumbers",showLineNumbers:!0},'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Index</title>\n    <link rel="stylesheet" href="/static/css/style.css">\n    <script src="/static/js/jquery.js"><\/script>\n</head>\n<body>\nHelloWorld\n</body>\n</html>\n')))),(0,a.kt)("p",null,"\u542f\u52a8\u670d\u52a1\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8080/static/index.html"},"http://localhost:8080/static/index.html")," \u8fdb\u884c\u8bbf\u95ee\u3002"))}f.isMDXComponent=!0}}]);