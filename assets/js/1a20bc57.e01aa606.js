"use strict";(self.webpackChunklivebundle_website=self.webpackChunklivebundle_website||[]).push([[468],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8215:function(e,n,t){var r=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(7462),a=t(7294),l=t(2389),i=t(9443);var o=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(3616),c=t(6010),s="tabItem_vU9c";function d(e){var n,t,l,i=e.lazy,d=e.block,p=e.defaultValue,m=e.values,f=e.groupId,v=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,u.lx)(g,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===p?p:null!=(n=null!=p?p:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=o(),w=k.tabGroupChoices,T=k.setTabGroupChoices,N=(0,a.useState)(y),C=N[0],I=N[1],O=[],x=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var E=w[f];null!=E&&E!==C&&g.some((function(e){return e.value===E}))&&I(E)}var L=function(e){var n=e.currentTarget,t=O.indexOf(n),r=g[t].value;r!==C&&(x(n),I(r),null!=f&&T(f,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},v)},g.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:function(e){return O.push(e)},onKeyDown:j,onFocus:L,onClick:L},l,{className:(0,c.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":C===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==C})}))))}function p(e){var n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},7905:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return f}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=t(6396),o=t(8215),u=["components"],c={id:"cli",title:"CLI Setup",sidebar_label:"CLI"},s=void 0,d={unversionedId:"cli",id:"cli",title:"CLI Setup",description:"Installing LiveBundle CLI",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/electrode-io/livebundle-website/blob/master/docs/cli.md",tags:[],version:"current",frontMatter:{id:"cli",title:"CLI Setup",sidebar_label:"CLI"},sidebar:"docsSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Native Module",permalink:"/docs/native-module"}},p=[{value:"Installing LiveBundle CLI",id:"installing-livebundle-cli",children:[],level:3},{value:"Creating a LiveBundle configuration file",id:"creating-a-livebundle-configuration-file",children:[],level:3},{value:"Trying the CLI",id:"trying-the-cli",children:[],level:3}],m={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"installing-livebundle-cli"},"Installing LiveBundle CLI"),(0,l.kt)("p",null,"We recommend keeping the CLI local to your React Native application project, and not installing it globally."),(0,l.kt)("p",null,"To add a dependency on the CLI your can run the following command from your application directory:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save livebundle\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add livebundle\n")))),(0,l.kt)("p",null,"If you are using ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," as your package manager, you will also need to add the following in the ",(0,l.kt)("inlineCode",{parentName:"p"},"scripts")," section of your application ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"livebundle": "livebundle"\n')),(0,l.kt)("h3",{id:"creating-a-livebundle-configuration-file"},"Creating a LiveBundle configuration file"),(0,l.kt)("p",null,"To create an initial LiveBundle configuration file for your application, just run the ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," command from your application project directory"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run livebundle init\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run livebundle init\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," command will generate a new ",(0,l.kt)("inlineCode",{parentName:"p"},"livebundle.yml")," configuration file in your React Native application directory.\nThis configuration file will work out of the box, but is configured to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs"},"livebundle-storage-fs")," storage plugin to store the bundles. This means that the bundles will be stored in a local directory (",(0,l.kt)("inlineCode",{parentName:"p"},"[HOME]/.livebundle/storage"),").",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"trying-the-cli"},"Trying the CLI"),(0,l.kt)("p",null,"To try out LiveBundle upload, just run the following command:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run livebundle upload\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run livebundle upload\n")))),(0,l.kt)("p",null,"The default configuration file will inform LiveBundle to generate two dev bundle ",(0,l.kt)("em",{parentName:"p"},"(android/ios)")," and store them in ",(0,l.kt)("inlineCode",{parentName:"p"},"[HOME]/.livebundle/storage"),", along with generating QR Code and Deep Link representations. It will then surface these representations in the terminal and in an image viewer ",(0,l.kt)("em",{parentName:"p"},"(for the QR Code)"),"."),(0,l.kt)("p",null,"Now that we're done with the CLI, it is time to add and initialize the native module."))}f.isMDXComponent=!0}}]);