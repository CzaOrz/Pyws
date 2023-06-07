"use strict";(self.webpackChunkpywss_docs=self.webpackChunkpywss_docs||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6550),i=n(1980),p=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,p]=f({queryString:n,groupId:a}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),v(e)}),[p,v,l]),tabValues:l}}var b=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(w,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function g(e){const t=(0,b.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},5427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const s={title:"\u6587\u4ef6\u8def\u7531",hide_title:!0,hide_table_of_contents:!1,slug:"file-route"},i=void 0,p={unversionedId:"advance/\u6587\u4ef6\u8def\u7531",id:"advance/\u6587\u4ef6\u8def\u7531",title:"\u6587\u4ef6\u8def\u7531",description:"\u6587\u4ef6\u8def\u7531",source:"@site/docs/advance/55.\u6587\u4ef6\u8def\u7531.mdx",sourceDirName:"advance",slug:"/advance/file-route",permalink:"/pywss/advance/file-route",draft:!1,editUrl:"https://github.com/czasg/pywss/edit/docs/docs/advance/55.\u6587\u4ef6\u8def\u7531.mdx",tags:[],version:"current",sidebarPosition:55,frontMatter:{title:"\u6587\u4ef6\u8def\u7531",hide_title:!0,hide_table_of_contents:!1,slug:"file-route"},sidebar:"tutorialSidebar",previous:{title:"\u89c6\u56fe\u673a\u5236",permalink:"/pywss/advance/app-view"},next:{title:"\u9759\u6001\u6587\u4ef6\u670d\u52a1",permalink:"/pywss/advance/static-file"}},u={},c=[{value:"\u6587\u4ef6\u8def\u7531",id:"\u6587\u4ef6\u8def\u7531",level:2},{value:"\u7c7b\u89c6\u56fe",id:"\u7c7b\u89c6\u56fe",level:4},{value:"\u7c7bapp\u89c6\u56fe",id:"\u7c7bapp\u89c6\u56fe",level:4},{value:"\u51fd\u6570\u89c6\u56fe",id:"\u51fd\u6570\u89c6\u56fe",level:4}],m={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6587\u4ef6\u8def\u7531"},"\u6587\u4ef6\u8def\u7531"),(0,r.kt)("admonition",{title:"\u7528\u524d\u987b\u77e5",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u8def\u7531")," \u662f\u4f5c\u8005\u5bf9\u8def\u7531\u7ba1\u7406\u7684\u63a2\u7d22\u4e0e\u5b9e\u8df5\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u5982\u4f55\u66f4\u597d\u7684\u7ec4\u7ec7\u9879\u76ee\uff0c\u4f5c\u8005\u4ecd\u7136\u5728\u5b66\u4e60\u4e2d\u3002\u6545\u6b64\u6a21\u5757\u540e\u7eed ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u80fd\u4f1a\u6709\u53d8\u52a8"),"\u3002")),(0,r.kt)("admonition",{title:"\u6587\u4ef6\u8def\u7531",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u8def\u7531"),"\uff0c\u5373\u901a\u8fc7\u5bf9 ",(0,r.kt)("strong",{parentName:"p"},"\u8def\u7531\u6587\u4ef6")," \u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u8def\u5f84\u3001\u540d\u79f0")," \u7b49\u6587\u4ef6\u4fe1\u606f\u8fdb\u884c\u7ba1\u7406\uff0c\u5b9e\u73b0\u5bf9\u8def\u7531\u7684\u6709\u6548\u7ba1\u7406\u3002")),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7ba1\u7406\u5927\u578b\u9879\u76ee\uff0cPywss \u652f\u6301\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.view_modules")," \u7684\u65b9\u5f0f\u6765\u5b9e\u73b0 ",(0,r.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u8def\u7531")," \u7684\u7ba1\u7406\u98ce\u683c\u3002"),(0,r.kt)("p",null,"\u5728\u8def\u7531\u6587\u4ef6\u4e2d\uff0c\u6709\u4e24\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5185\u7f6e\u53c2\u6570"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5185\u7f6e\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"__route__"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9a\u5f53\u524d\u6587\u4ef6\u8def\u7531\uff0c\u9ed8\u8ba4\u4e3a\u5f53\u524d\u6587\u4ef6\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"__view__"))),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6307\u5b9a\u5f53\u524d\u6587\u4ef6\u8def\u7531\u89c6\u56fe\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"View"),"\u5bf9\u8c61")))),(0,r.kt)("p",null,"\u6211\u4eec\u7ee7\u7eed\u901a\u8fc7\u4e00\u4e2a\u6848\u4f8b\u6765\u8bf4\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u9879\u76ee\u7ed3\u6784"',title:'"\u9879\u76ee\u7ed3\u6784"'},"- view\n  - api/\n    - v1/\n      user.py\n      user_role.py\n    - v2/\n      permission.py\nmain.py\n")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"main.py",label:"main.py",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers {5}",showLineNumbers:!0,"{5}":!0},"import pywss\n\ndef main():\n    app = pywss.App()\n    app.view_modules(\"view\")  # \u6307\u5b9a\u8def\u7531\u6a21\u5757\n    app.run()\n\nif __name__ == '__main__':\n    main()\n"))),(0,r.kt)(o.Z,{value:"user.py",label:"/api/v1/user.py\uff08\u7c7b\u89c6\u56fe\uff09",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import pywss\n\n__route__ = "/user"  # \u9ed8\u8ba4\u503c\n__view__ = "View"  # \u9ed8\u8ba4\u503c\n\nclass View:\n\n    def http_get(self, ctx: pywss.Context):\n        ctx.write({\n            "code": 0,\n            "method": "GET",\n            "route": "/api/v1/user",\n            "message": "\u83b7\u53d6\u7528\u6237\u6210\u529f",\n        })\n\n    def http_post(self, ctx: pywss.Context):\n        ctx.write({\n            "code": 0,\n            "method": "POST",\n            "route": "/api/v1/user",\n            "message": "\u521b\u5efa\u7528\u6237\u6210\u529f",\n        })\n\n    def http_delete(self, ctx: pywss.Context):\n        ctx.write({\n            "code": 0,\n            "method": "DELETE",\n            "route": "/api/v1/user",\n            "message": "\u5220\u9664\u7528\u6237\u6210\u529f",\n        })\n'))),(0,r.kt)(o.Z,{value:"user_role.py",label:"/api/v1/user_role.py\uff08\u7c7bapp\u89c6\u56fe\uff09",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers",showLineNumbers:!0},'import pywss\n\n__route__ = "/userRole"  # \u6307\u5b9a\u8def\u7531\uff0c\u5426\u5219\u9ed8\u8ba4"/user_role"\n__view__ = "View"  # \u9ed8\u8ba4\n\nclass View:\n\n    def __init__(self, app: pywss.App):  # \u6307\u5b9a\u4e00\u4e2a\u5165\u53c2\u65f6\uff0c\u4f1a\u5c06app\u4f5c\u4e3a\u521d\u59cb\u5316\u53c2\u6570\u4f20\u9012\u8fdb\u6765\n        pass\n\n    def http_get(self, ctx: pywss.Context):\n        ctx.write({\n            "code": 0,\n            "method": "GET",\n            "route": "/api/v1/userRole",\n            "message": "\u83b7\u53d6\u7528\u6237\u89d2\u8272\u6210\u529f",\n        })\n\n    def http_post(self, ctx: pywss.Context):\n        ctx.write({\n            "code": 0,\n            "method": "POST",\n            "route": "/api/v1/userRole",\n            "message": "\u521b\u5efa\u7528\u6237\u89d2\u8272\u6210\u529f",\n        })\n\n    def http_delete(self, ctx: pywss.Context):\n        ctx.write({\n            "code": 0,\n            "method": "DELETE",\n            "route": "/api/v1/userRole",\n            "message": "\u5220\u9664\u7528\u6237\u89d2\u8272\u6210\u529f",\n        })\n'))),(0,r.kt)(o.Z,{value:"permission.py",label:"/api/v2/permission.py\uff08\u51fd\u6570\u89c6\u56fe\uff09",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"showLineNumbers {7}",showLineNumbers:!0,"{7}":!0},'import pywss\n\n__route__ = "/perm"  # \u6307\u5b9a\u8def\u7531\uff0c\u5426\u5219\u9ed8\u8ba4"/permission"\n__view__ = "view"  # \u6307\u5b9a\u89c6\u56fe\uff0c\u5426\u5219\u9ed8\u8ba4"View"\n\n# \u5f53\u6307\u5b9a\u89c6\u56fe\u662f\u51fd\u6570\u65f6\uff0c\u4f1a\u5c06app\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u8fdb\u6765\ndef view(app: pywss.App):\n    app.get("/", http_get)\n    app.post("/", http_post)\n    app.delete("/", http_delete)\n\ndef http_get(ctx: pywss.Context):\n    ctx.write({\n        "code": 0,\n        "method": "GET",\n        "route": "/api/v2/perm",\n        "message": "\u83b7\u53d6\u6743\u9650\u6210\u529f",\n    })\n\ndef http_post(ctx: pywss.Context):\n    ctx.write({\n        "code": 0,\n        "method": "POST",\n        "route": "/api/v2/perm",\n        "message": "\u521b\u5efa\u7528\u6237\u89d2\u8272\u6210\u529f",\n    })\n\ndef http_delete(ctx: pywss.Context):\n    ctx.write({\n        "code": 0,\n        "method": "DELETE",\n        "route": "/api/v2/perm",\n        "message": "\u5220\u9664\u7528\u6237\u89d2\u8272\u6210\u529f",\n    })\n')))),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," \u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},'app.view_modules("view")')," \u6307\u5b9a",(0,r.kt)("strong",{parentName:"p"},"\u8def\u7531\u6a21\u5757"),"\u3002\u6ce8\u610f\u6b64\u5904\u662f\u6a21\u5757\u800c\u4e0d\u662f\u76ee\u5f55\uff08\u4f7f\u7528 . \u800c\u4e0d\u662f /\uff09\u3002"),(0,r.kt)("p",null,"\u5f53\u6a21\u5757\u53ea\u6709\u4e00\u7ea7\u7684\u65f6\u5019\u770b\u4e0d\u51fa\u533a\u522b\uff0c\u5f53\u6211\u4eec\u6307\u5b9a\u4e8c\u7ea7\u6a21\u5757\u65f6\u5c31\u53ef\u4ee5\u5f88\u597d\u7684\u533a\u522b\u4e86\uff0c\u6bd4\u5982\u6211\u4eec\u9700\u8981\u6307\u5b9a ",(0,r.kt)("strong",{parentName:"p"},"/view/api/v1"),"\uff0c\n\u8fd9\u65f6\u6211\u4eec\u5e94\u8be5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},'app.view_modules("view.api.v1")')," \u800c\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},'app.view_modules("view/api/v1")'),"\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u4e0d\u540c\u8def\u7531\u6a21\u5757\u4e4b\u95f4\u7684\u51b2\u7a81\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"view_modules")," \u4ec5\u4e14\u652f\u6301\u6307\u5b9a\u5f53\u524d\u8c03\u7528\u6a21\u5757\u4e0b\u7684\u5b50\u6a21\u5757\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"view_modules")," \u4f1a\u904d\u5386\u6307\u5b9a",(0,r.kt)("strong",{parentName:"p"},"\u8def\u7531\u6a21\u5757"),"\uff0c\u5e76\u8bfb\u53d6\u5b50\u6a21\u5757\u4e0b\u7684\u4e24\u4e2a\u7279\u5b9a\u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"p"},"__view__")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"__route__"),"\uff0c\u7136\u540e\u901a\u8fc7\u8fd9\u4e24\u4e2a\u5c5e\u6027\u6765\u52a0\u8f7d\u89c6\u56fe\u6a21\u5757\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\uff0c\u4e3a\u4e86\u66f4\u52a0\u7075\u6d3b\u7684\u5b9e\u73b0\u89c6\u56fe\u673a\u5236\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"view_modules")," \u652f\u6301\u4e09\u79cd\u673a\u5236\uff1a"),(0,r.kt)("h4",{id:"\u7c7b\u89c6\u56fe"},"\u7c7b\u89c6\u56fe"),(0,r.kt)("p",null,"\u7c7b\u89c6\u56fe\u5c31\u662f\u524d\u7ae0\u8282\u4e2d\u666e\u901a\u7684\u89c6\u56fe\u673a\u5236\u3002"),(0,r.kt)("h4",{id:"\u7c7bapp\u89c6\u56fe"},"\u7c7bapp\u89c6\u56fe"),(0,r.kt)("p",null,"\u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5230 App \u6267\u884c\u521d\u59cb\u5316\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"view_modules")," \u52a0\u5165\u4e86\u7c7b\u521d\u59cb\u5316\u51fd\u6570\u7684\u5224\u65ad\u903b\u8f91\uff0c\u5373\u5f53\u7c7b\u4e2d\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"def __init__(self, app: pywss.App)")," \u521d\u59cb\u5316\u51fd\u6570\u65f6\uff0c\n\u4f1a\u5c06 app \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u6267\u884c\u521d\u59cb\u5316\u3002"),(0,r.kt)("h4",{id:"\u51fd\u6570\u89c6\u56fe"},"\u51fd\u6570\u89c6\u56fe"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4e60\u60ef\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u540c\u5b66\u6765\u8bf4\uff0c\u53ef\u80fd\u4f1a\u66f4\u559c\u6b22\u6b64\u79cd\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"view_modules")," \u540c\u6837\u4f1a\u5224\u65ad\u89c6\u56fe\u662f\u5426\u5c5e\u4e8e\u51fd\u6570\uff0c\u5982\u679c\u662f\u51fd\u6570\uff0c\u5219\u4f1a\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"party")," \u5e76\u5c06 App \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u89c6\u56fe\u51fd\u6570\u3002"))}f.isMDXComponent=!0}}]);