"use strict";(self.webpackChunklivebundle_website=self.webpackChunklivebundle_website||[]).push([[80],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1933:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return c},default:function(){return g}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=n(4996),l=["components"],u={id:"contributing",title:"Contributing",sidebar_label:"Contributing"},s=void 0,p={unversionedId:"contributing",id:"contributing",title:"Contributing",description:"LiveBundle is fully open sourced and we welcome contributions !",source:"@site/docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/docs/contributing",editUrl:"https://github.com/electrode-io/livebundle-website/blob/master/docs/contributing.md",tags:[],version:"current",frontMatter:{id:"contributing",title:"Contributing",sidebar_label:"Contributing"},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/docs/architecture"},next:{title:"CLI",permalink:"/docs/cli"}},d={},c=[{value:"Ways to contribute",id:"ways-to-contribute",level:2},{value:"LiveBundle CLI Development",id:"livebundle-cli-development",level:2},{value:"Stack",id:"stack",level:3},{value:"Development Setup",id:"development-setup",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Logging",id:"logging",level:3},{value:"Before opening a PR",id:"before-opening-a-pr",level:3},{value:"Repository structure <em>(curated)</em>",id:"repository-structure-curated",level:3},{value:"LiveBundle Native Module Development",id:"livebundle-native-module-development",level:2},{value:"Stack",id:"stack-1",level:3},{value:"Development Setup",id:"development-setup-1",level:3}],m={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"LiveBundle is fully open sourced and we welcome contributions !"),(0,o.kt)("h2",{id:"ways-to-contribute"},"Ways to contribute"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Report an issue or bug")),(0,o.kt)("p",null,"If you are facing an issue or you identified a bug, please open an issue ticket in the adequate repository."),(0,o.kt)("p",null,"For problems with the command line CLI, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle/issues/new"},"open an issue in livebundle repository"),".",(0,o.kt)("br",null),"\nFor problems with the native module, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/react-native-livebundle/issues/new"},"open an issue in react-native-livebundle repository"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Improve documentation")),(0,o.kt)("p",null,"If you identified a typo in our documentation, or if something is not properly explained or if you just want to contribute new documentation, you can open a Pull Request to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle-website"},"livebundle-website")," repository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Write a new LiveBundle CLI plugin")),(0,o.kt)("p",null,"The LiveBundle CLI is highly modular thanks to its ",(0,o.kt)("a",{parentName:"p",href:"./architecture"},"plugin based architecture"),". If you would like to contribute a new plugin to make LiveBundle even better, you can refer to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugin-authoring"},"plugin authoring documentation"),". When you're ready, just open a PR to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle"},"livebundle repository"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tackle an easy first task")),(0,o.kt)("p",null,"We label some issues in LiveBundle repositories as ",(0,o.kt)("inlineCode",{parentName:"p"},"good first issue"),". We consider these issues to be easy enough to be tackled by new contributors not yet super familiar with LiveBundle codebase and architecture."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue"},"LiveBundle CLI good first issues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/react-native-livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue"},"LiveBundle native module good first issues"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tackle some enhancement")),(0,o.kt)("p",null,"Similarly to the ",(0,o.kt)("inlineCode",{parentName:"p"},"good first issue")," label, we use the ",(0,o.kt)("inlineCode",{parentName:"p"},"enhancement")," label for any work that would improve LiveBundle. Even though some ",(0,o.kt)("inlineCode",{parentName:"p"},"enhancement")," labelled issues might also be labelled as ",(0,o.kt)("inlineCode",{parentName:"p"},"good first issue"),", most of them will not, and will be challenging. If you feel like you have a good understanding of the LiveBundle codebase, you can tackle these ones or just engage on them to suggest ideas."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement"},"LiveBundle CLI enchancements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/react-native-livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agenhancement"},"LiveBundle native enhancements"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Suggest improvements or new features")),(0,o.kt)("p",null,"If you have ideas for potential LiveBundle enhancements, but don't feel like implementing these enhancements yourself, you can still contribute by submitting such new ideas."),(0,o.kt)("p",null,"For suggesting an enhancement to the command line CLI, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle/issues/new"},"open an issue in livebundle repository"),".",(0,o.kt)("br",null),"\nFor suggesting an enhancement to the native module, you can ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/react-native-livebundle/issues/new"},"open an issue in react-native-livebundle repository"),"."),(0,o.kt)("h2",{id:"livebundle-cli-development"},"LiveBundle CLI Development"),(0,o.kt)("h3",{id:"stack"},"Stack"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle"},"LiveBundle CLI")," is written in ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"TypeScript"),".",(0,o.kt)("br",null),"\nWe use ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," package manager.",(0,o.kt)("br",null),"\n",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code")," is our main development IDE. This IDE is not a requirement to work on LiveBundle but it integrates nicely with our development process and tools.",(0,o.kt)("br",null),"\nOur test suites are written using ",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," and ",(0,o.kt)("a",{parentName:"p",href:"https://sinonjs.org/"},"Sinon.JS"),".\nLiveBundle is using ",(0,o.kt)("a",{parentName:"p",href:"https://istanbul.js.org/"},"Istanbul")," to compute test coverage and ",(0,o.kt)("a",{parentName:"p",href:"https://codecov.io/"},"CodeCov")," for online coverage reports.",(0,o.kt)("br",null),"\nWe use ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," and ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," for linting and code styling."),(0,o.kt)("h3",{id:"development-setup"},"Development Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure you have ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," installed."),(0,o.kt)("li",{parentName:"ul"},"Fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/livebundle"},"LiveBundle CLI")," repository and clone your fork locally."),(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn install")," from the directory in which you have cloned the project.")),(0,o.kt)("h3",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Debugging can be achieved within ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/livebundle/issues?q=is%3Aissue+is%3Aopen+label%3Agood-first-issue"},"Visual Studio Code"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("p",null,"To debug the CLI, open the LiveBundle project in Visual Studio Code and run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn debug")," from a Visual Studio code terminal ",(0,o.kt)("em",{parentName:"p"},"(important, otherwise Visual Studio code will not auto attach debugger)"),"."),(0,o.kt)("p",null,"This is equivalent to running the ",(0,o.kt)("inlineCode",{parentName:"p"},"livebundle")," CLI executable ",(0,o.kt)("em",{parentName:"p"},"(as if running ",(0,o.kt)("inlineCode",{parentName:"em"},"yarn livebundle"),")"),", but with debugging enabled.\nIt is thus possible to provide any supported livebundle command and option(s) as if directly running the ",(0,o.kt)("inlineCode",{parentName:"p"},"livebundle")," CLI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Tests")),(0,o.kt)("p",null,"To debug the tests, launch ",(0,o.kt)("inlineCode",{parentName:"p"},"Mocha Tests")," debug configuration from the IDE."),(0,o.kt)("img",{alt:"Run Mocha Tests",src:(0,a.Z)("img/run-mocha-tests.png"),width:"250"}),(0,o.kt)("h3",{id:"logging"},"Logging"),(0,o.kt)("p",null,"LiveBundle is using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/debug"},"debug")," library to for logging.",(0,o.kt)("br",null),"Please refer to this library documentation for reference.",(0,o.kt)("br",null),"\nIn a nutshell, to enable all LiveBundle logs, just set ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG=livebundle*")," environment variable."),(0,o.kt)("h3",{id:"before-opening-a-pr"},"Before opening a PR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that the code is properly formatted by running ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn lint")),(0,o.kt)("li",{parentName:"ul"},"Make sure that all tests are passing by running ",(0,o.kt)("inlineCode",{parentName:"li"},"yarn test"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We have 100% code coverage for the LiveBundle CLI and would like to keep it at this level.",(0,o.kt)("br",null),"\nIdeally you should add tests to cover all newly introduced code. This is not a strict requirement ",(0,o.kt)("em",{parentName:"p"},"(our core team will take care of it otherwise)")," but is always a plus.",(0,o.kt)("br",null),"To check code coverage you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn coverage"),". The coverage report will be logged to the terminal after running the tests. You can also see the detailed generated report in ",(0,o.kt)("inlineCode",{parentName:"p"},"coverage/index.html"),"."))),(0,o.kt)("h3",{id:"repository-structure-curated"},"Repository structure ",(0,o.kt)("em",{parentName:"h3"},"(curated)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 lerna.json            // Lerna configuration\n\u251c\u2500\u2500 packages              // Node.js packages\n\u2502   \u251c\u2500\u2500 livebundle                      // Command line CLI executable\n\u2502   \u251c\u2500\u2500 livebundle-bundler-metro        // Metro Bundler plugin\n\u2502   \u251c\u2500\u2500 livebundle-generator-deeplink   // Deep link generator plugin\n\u2502   \u251c\u2500\u2500 livebundle-generator-qrcode     // QR Code generator plugin\n\u2502   \u251c\u2500\u2500 livebundle-notifier-github      // GitHub notifier plugin\n\u2502   \u251c\u2500\u2500 livebundle-notifier-terminal    // Terminal notifier plugin\n\u2502   \u251c\u2500\u2500 livebundle-notifier-viewer      // Viewer notifier plugin\n\u2502   \u251c\u2500\u2500 livebundle-sdk                  // SDK\n\u2502   \u251c\u2500\u2500 livebundle-server-metro         // Metro Server plugin\n\u2502   \u251c\u2500\u2500 livebundle-storage-azure        // Azure Storage plugin\n\u2502   \u251c\u2500\u2500 livebundle-storage-fs           // File System Storage plugin\n\u2502   \u2514\u2500\u2500 livebundle-utils                // Misc utilities\n\u251c\u2500\u2500 tsconfig.build.json   // TypeScript config used for builds\n\u251c\u2500\u2500 tsconfig.json         // TypeScript config used by monorepo\n\u251c\u2500\u2500 codecov.yml           // Codecov configuration\n\u251c\u2500\u2500 .eslintignore.json    // Files/Directories to exclude from ESLint\n\u251c\u2500\u2500 .eslintrc.js          // ESLint configuration\n\u251c\u2500\u2500 .mocharc.json         // Mocha configuration\n\u251c\u2500\u2500 .nycrc                // nyc (coverage) configuration\n\u251c\u2500\u2500 .prettier.rc          // Prettier configuration\n\u2514\u2500\u2500 .vscode               // VSCode IDE configuration\n    \u2514\u2500\u2500 settings.json     // VSCode workspace configuration\n")),(0,o.kt)("h2",{id:"livebundle-native-module-development"},"LiveBundle Native Module Development"),(0,o.kt)("h3",{id:"stack-1"},"Stack"),(0,o.kt)("p",null,"As most standard React Native native modules, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/electrode-io/react-native-livebundle"},"LiveBundle native module")," is written using a mix of JavaScript, ObjectiveC and Java.",(0,o.kt)("br",null),"\nWe unfortunately don't have any tests yet, so testing, is currently limited to manual testing using the example application part of the native module repository."),(0,o.kt)("h3",{id:"development-setup-1"},"Development Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure you have ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," installed."),(0,o.kt)("li",{parentName:"ul"},"Fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/react-native-livebundle"},"LiveBundle native module")," repository and clone your fork locally."),(0,o.kt)("li",{parentName:"ul"},"Follow the instructions ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/electrode-io/react-native-livebundle/blob/master/example/README.md"},"in the example app README")," to get started with development.")))}g.isMDXComponent=!0}}]);