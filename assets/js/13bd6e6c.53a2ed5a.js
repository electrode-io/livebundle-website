(self.webpackChunklivebundle_site=self.webpackChunklivebundle_site||[]).push([[521],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),u=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(t),m=a,d=g["".concat(p,".").concat(m)]||g[m]||c[m]||r;return t?i.createElement(d,o(o({ref:n},s),{},{components:t})):i.createElement(d,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1441:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var i=t(2122),a=t(9756),r=(t(7294),t(3905)),o={id:"plugin-authoring",title:"Plugin Authoring",sidebar_label:"Plugin Authoring"},l={unversionedId:"plugin-authoring",id:"plugin-authoring",isDocsHomePage:!1,title:"Plugin Authoring",description:"Where to host plugin implementation",source:"@site/docs/plugin-authoring.md",sourceDirName:".",slug:"/plugin-authoring",permalink:"/livebundle/docs/plugin-authoring",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/plugin-authoring.md",version:"current",sidebar_label:"Plugin Authoring",frontMatter:{id:"plugin-authoring",title:"Plugin Authoring",sidebar_label:"Plugin Authoring"},sidebar:"someSidebar",previous:{title:"FAQ",permalink:"/livebundle/docs/faq"}},p=[{value:"Where to host plugin implementation",id:"where-to-host-plugin-implementation",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Create a new node package for the plugin",id:"create-a-new-node-package-for-the-plugin",children:[]},{value:"Implement the plugin create method",id:"implement-the-plugin-create-method",children:[]},{value:"Implement the plugin interfaces",id:"implement-the-plugin-interfaces",children:[]},{value:"Configurable Plugins",id:"configurable-plugins",children:[{value:"Implementation",id:"implementation",children:[]},{value:"Configuration processing and validation",id:"configuration-processing-and-validation",children:[]}]}],u={toc:p};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"where-to-host-plugin-implementation"},"Where to host plugin implementation"),(0,r.kt)("p",null,"While LiveBundle plugins are independent node packages, loaded dynamically, thus do not strictly have to be present within LiveBundle monorepo, we do recommend to contribute such new plugins directly to LiveBundle monorepo, unless the plugin being implemented cannot be made publicly available. The advantages of keeping new plugins withing LiveBundle monorepo is that we can ship all the plugins with the CLI distribution, guaranteeing plugins compatibility with each new CLI version and in case of changes in the SDK, we can easily update all plugins present in the monorepo immediately."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Implementation should be done in TypeScript if the plugin is to be hosted in LiveBundle CLI monorepo. This is not a requirement, and JavaScript can be used for non monorepo hosted plugins."),(0,r.kt)("p",null,"As detailed in the ",(0,r.kt)("a",{parentName:"p",href:"/livebundle/docs/plugins"},"plugins overview")," documentation, LiveBundle plugins fall under five categories, respectively ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundlers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Servers"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Generators"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Notifiers"),"."),(0,r.kt)("p",null,"When it comes to implementing a plugin, the only difference between these categories, is that each plugin category comes with its own interface to implement."),(0,r.kt)("p",null,"Overall, implementing a new plugin comes down to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new node package for this plugin"),(0,r.kt)("li",{parentName:"ul"},"Implement the constructor of the plugin"),(0,r.kt)("li",{parentName:"ul"},"Implement the interface of the specific plugin category"),(0,r.kt)("li",{parentName:"ul"},"Finally, if the plugin can be configured, expose the configuration schema and optionally environment variables mapping")),(0,r.kt)("p",null,"We will go through each of these high level steps in this documentation."),(0,r.kt)("p",null,"Also to be noted that we are not expecting to see many new ",(0,r.kt)("inlineCode",{parentName:"p"},"Generators")," plugins. These plugins also would require an update to the native module to be able to handle the new representation(s) produced by such Generators."),(0,r.kt)("h2",{id:"create-a-new-node-package-for-the-plugin"},"Create a new node package for the plugin"),(0,r.kt)("p",null,"The easiest -for now- here would just be to copy/paste an existing plugin package, and replace its implementation."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Storage")," provider plugin, you can start from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-storage-fs"},(0,r.kt)("inlineCode",{parentName:"a"},"livebundle-storage-fs"))," plugin."),(0,r.kt)("li",{parentName:"ul"},"To create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Bundler")," plugin, you can start from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-bundler-metro"},(0,r.kt)("inlineCode",{parentName:"a"},"livebundle-bundler-metro"))," plugin."),(0,r.kt)("li",{parentName:"ul"},"To create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Notifier")," plugin, you can start from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-notifier-terminal"},(0,r.kt)("inlineCode",{parentName:"a"},"livebundle-notifier-terminal"))," plugin."),(0,r.kt)("li",{parentName:"ul"},"To create a new ",(0,r.kt)("inlineCode",{parentName:"li"},"Server")," plugin, you can start from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle/tree/master/packages/livebundle-server-metro"},(0,r.kt)("inlineCode",{parentName:"a"},"livebundle-server-metro"))," plugin.")),(0,r.kt)("h2",{id:"implement-the-plugin-create-method"},"Implement the plugin create method"),(0,r.kt)("p",null,"Apart from ",(0,r.kt)("inlineCode",{parentName:"p"},"Generator")," plugins, which have an extra parameter, all plugins should expose a static ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method which will be invoked by LiveBundle with a single parameter, being the plugin configuration ",(0,r.kt)("em",{parentName:"p"},"(if any)"),"."),(0,r.kt)("p",null,"Not much should be done in this method, apart from storing a reference to the supplied configuration."),(0,r.kt)("h2",{id:"implement-the-plugin-interfaces"},"Implement the plugin interfaces"),(0,r.kt)("p",null,"Here are the interfaces of every plugin categories."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface BundlerPlugin {\n  bundle(): Promise<LocalBundle[]>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface ServerPlugin {\n  launchServer(opts?: ServerOpts): Promise<void>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GeneratorPlugin {\n  generate({\n    id,\n    type,\n  }: {\n    id: string;\n    type: LiveBundleContentType;\n  }): Promise<Record<string, unknown>>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface NotifierPlugin {\n  notify({\n    generators,\n    pkg,\n    type,\n  }: {\n    generators: Record<string, Record<string, unknown>>;\n    pkg?: Package;\n    type: LiveBundleContentType;\n  }): Promise<void>;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface StoragePlugin {\n  store(\n    content: string,\n    contentLength: number,\n    targetPath: string,\n  ): Promise<string>;\n  storeFile(\n    filePath: string,\n    targetPath: string,\n    options?: {\n      contentType?: string;\n    },\n  ): Promise<string>;\n  hasFile(filePath: string): Promise<boolean>;\n  downloadFile(filePath: string): Promise<Buffer>;\n  readonly baseUrl: string;\n}\n")),(0,r.kt)("h2",{id:"configurable-plugins"},"Configurable Plugins"),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To implement a plugin that can be configured through configuration properties, you should first define a JSON Schema to represent the configuration properties, along with their types and constraints."),(0,r.kt)("p",null,"You should then expose this schema via the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema")," class property of your plugin implementation."),(0,r.kt)("p",null,"For example, assuming your parsed configuration schema ",(0,r.kt)("em",{parentName:"p"},"(JavaScript object)")," is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"configSchema")," variable, you can expose it this way."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"public static readonly schema: Record<string, unknown> = configSchema;\n")),(0,r.kt)("p",null,"Also, in case you would like to some configuration properties to be potentially set as environment variables rather than directly set in the yaml configuration file, you should declare an ",(0,r.kt)("inlineCode",{parentName:"p"},"envVarToConfigKey")," class property, containing a map of environement variable name to configuration property name. For example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'public static readonly envVarToConfigKey: Record<string, string> = {\n  LB_STORAGE_AZURE_ACCOUNTURL: "accountUrl",\n  LB_STORAGE_AZURE_CONTAINER: "container",\n};\n')),(0,r.kt)("p",null,"The convention used by LiveBundle for naming such environment variables is the following"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LB_[PLUGIN_CATEGORY]_[PLUGIN_NAME]_[PROPERTY_NAME]")),(0,r.kt)("p",null,"If your plugin is coming with a default configuration, you can declare the ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultConfig")," class property to return this configuration as a JavaScript object."),(0,r.kt)("h3",{id:"configuration-processing-and-validation"},"Configuration processing and validation"),(0,r.kt)("p",null,"Internally, LiveBundle will preprocess and validate each plugin configuration as follow:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Parse the plugin configuration as declared in the YAML configuration file"),(0,r.kt)("li",{parentName:"ol"},'"Reconcilate" the configuration with environment variables. For any configuration properties that can be set as environment variables, LiveBundle will look if any of these environment variables are set and will apply the following reconciliation logic :',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the configuration property is defined in the yaml config but not as an env var, then use the configuration property from the yaml config."),(0,r.kt)("li",{parentName:"ul"},"If the configuration property is defined as an env var, but not in the yaml config, then use the configuration property from the env var."),(0,r.kt)("li",{parentName:"ul"},"If the configuration property is defined both as the env var and in yaml config, fail configuration loading and report ambiguity."))),(0,r.kt)("li",{parentName:"ol"},"Merge the configuration with the default configuration of the plugin. This means that LiveBundle will use the default value of any missing configuration property."),(0,r.kt)("li",{parentName:"ol"},"Finally, validate the final configuration against the JSON schema.")))}s.isMDXComponent=!0}}]);