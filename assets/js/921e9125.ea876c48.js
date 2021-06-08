(self.webpackChunklivebundle_site=self.webpackChunklivebundle_site||[]).push([[893],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7916:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var i=n(2122),a=n(9756),r=(n(7294),n(3905)),o={id:"github",title:"GitHub Integration",sidebar_label:"GitHub Integration"},l={unversionedId:"github",id:"github",isDocsHomePage:!1,title:"GitHub Integration",description:"LiveBundle comes with a GitHub integration (through the Github notifier plugin) that can be used to generate and upload a LiveBundle package for every opened Pull Request and then post the associated QR Code and Deep Link as a comment on the Pull Request.",source:"@site/docs/github.md",sourceDirName:".",slug:"/github",permalink:"/livebundle/docs/github",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/github.md",version:"current",sidebar_label:"GitHub Integration",frontMatter:{id:"github",title:"GitHub Integration",sidebar_label:"GitHub Integration"},sidebar:"someSidebar",previous:{title:"Storage Setup",permalink:"/livebundle/docs/storage"},next:{title:"Commands",permalink:"/livebundle/docs/cli-reference"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Adding the GitHub notifier plugin",id:"adding-the-github-notifier-plugin",children:[]},{value:"Setting up the CI job",id:"setting-up-the-ci-job",children:[{value:"With GitHub actions",id:"with-github-actions",children:[]},{value:"Without GitHub actions",id:"without-github-actions",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"LiveBundle comes with a GitHub integration ",(0,r.kt)("em",{parentName:"p"},"(through the Github notifier plugin)")," that can be used to generate and upload a LiveBundle package for every opened Pull Request and then post the associated QR Code and Deep Link as a comment on the Pull Request."),(0,r.kt)("p",null,"This integration will work in different GitHub/CI environments such as :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GitHub public with GitHb actions"),(0,r.kt)("li",{parentName:"ul"},"GitHub public with third party CI provider"),(0,r.kt)("li",{parentName:"ul"},"GitHub enterprise with third party CI provider")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Complete functional LiveBundle setup ",(0,r.kt)("em",{parentName:"li"},"(completed the ",(0,r.kt)("a",{parentName:"em",href:"/livebundle/docs/cli"},"Trying it out")," section)")),(0,r.kt)("li",{parentName:"ul"},"React Native application hosted in GitHub ",(0,r.kt)("em",{parentName:"li"},"(public or enteprise)"))),(0,r.kt)("h2",{id:"adding-the-github-notifier-plugin"},"Adding the GitHub notifier plugin"),(0,r.kt)("p",null,"If you are planning to use LiveBundle from different contexts ",(0,r.kt)("em",{parentName:"p"},"(for example running LiveBundle from developer workstation, but also running LiveBundle in CI on every PR)"),", you will need to create a different LiveBundle configuration file to be used on CI ",(0,r.kt)("em",{parentName:"p"},"(as we don't want the GitHub notifier to be run when using LiveBundle from a developer workstation)"),"."),(0,r.kt)("p",null,"For this purpose, you can create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"livebundle.ci.yml")," configuration file. Just duplicate your existing configuration for a start."),(0,r.kt)("p",null,"Then go ahead and remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"viewer")," notifiers from the ",(0,r.kt)("inlineCode",{parentName:"p"},"notifiers")," section. Indeed, when we run LiveBundle from a CI environment, we don't want to log the QR Code to the terminal, nor to open it in a viewer."),(0,r.kt)("p",null,"Next, in replacement of these notifiers, let's instead use the ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," notifier plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"github:\n  baseUrl: https://api.github.com\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"baseUrl")," is set to point to public GitHub API by default. If you are using GitHub enteprise, update the url accordingly."))),(0,r.kt)("h2",{id:"setting-up-the-ci-job"},"Setting up the CI job"),(0,r.kt)("p",null,"Independently of the CI tool used, setting up the CI job just come down to running the ",(0,r.kt)("inlineCode",{parentName:"p"},"livebundle upload")," command from the CI job, for every PR."),(0,r.kt)("h3",{id:"with-github-actions"},"With GitHub actions"),(0,r.kt)("p",null,"This setup can only be achieved on GitHub public, given that GitHub actions are not yet supported in GitHub enterprise."),(0,r.kt)("p",null,'This is the "go to" setup if your repository is hosted in GitHub public and if you are using GitHub actions to perform your CI.',(0,r.kt)("br",null)),(0,r.kt)("p",null,"Here is a sample of a complete GitHub action workflow to run LiveBundle on every PR to master branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: LiveBundle\n\non:\n  pull_request:\n    branches: [ master ]\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n\n    steps:\n    - uses: actions/checkout@v2\n    - uses: actions/setup-node@v2-beta\n      with:\n        node-version: '12'\n    - run: yarn install\n    - run: yarn livebundle upload --config livebundle.ci.yaml\n      env:\n        CI: true\n        DEBUG: \"*,-babel*\"\n        LB_STORAGE_AZURE_SASTOKEN: ${{secrets.LB_UPLOAD_AZURE_SASTOKEN}}\n        LB_NOTIFIER_GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}\n")),(0,r.kt)("p",null,"If you want to run LiveBundle part of an existing PR workflow, all that's need is to run the ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn livebundle upload --config livebundle.ci.yaml")," command and also have the ",(0,r.kt)("inlineCode",{parentName:"p"},"LB_STORAGE_AZURE_SASTOKEN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LB_NOTIFIER_GITHUB_TOKEN")," environment variables properly set. We recommend keeping these variables values as GitHub secrets as to not publicly shared them."),(0,r.kt)("h3",{id:"without-github-actions"},"Without GitHub actions"),(0,r.kt)("p",null,"If your repository is hosted in GitHub enterprise, with no access to GitHub actions, or if your CI is not relying on GitHub actions, you will need to do the following."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In your CI job set the following environment variables"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LB_STORAGE_AZURE_SASTOKEN")," ",(0,r.kt)("em",{parentName:"li"},"(SAS token to use for uploads to Azure Blob Storage)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LB_NOTIFIER_GITHUB_TOKEN")," ",(0,r.kt)("em",{parentName:"li"},"(GitHub API token to use to post comment with QR Code)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LB_NOTIFIER_GITHUB_PRURL")," ",(0,r.kt)("em",{parentName:"li"},"(Full URL to the Pull Request. This value is usually exposed in a specific env var in most CI tools)"))))),(0,r.kt)("p",null,"As discussed in the setup using GitHub actions, we recommend keeping the token values as secrets."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your CI job ",(0,r.kt)("em",{parentName:"li"},"(run on every PR)"),", just invoke the ",(0,r.kt)("inlineCode",{parentName:"li"},"livebundle upload")," command, for example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn livebundle upload --config livebundle.ci.yaml\n")),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn install")," ",(0,r.kt)("em",{parentName:"p"},"(or ",(0,r.kt)("inlineCode",{parentName:"em"},"npm install"),")")," has been run before using ",(0,r.kt)("inlineCode",{parentName:"p"},"livebundle upload")))))}p.isMDXComponent=!0}}]);