(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(module,exports,__webpack_require__){module.exports={menuItem:"_1GmXNjpFdPrC3GNvzVdHhW",menuItemLabel:"_3Clgb2uOhNLLRbw9rcachs",sidebar:"_1dmbhguIxUSsgpaf9zLK0L",about:"_3dIZNAXs-heQSzn8i-khOk"}},163:function(module,exports,__webpack_require__){module.exports={app:"_184GBn0PFDEVTL2xPoXwH1",main:"_11fefYP3AAF8bkwXSqO-5V",logo:"_1V80tGza29lZIwDDW6Sj3B"}},240:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return UploadForm}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_UploadForm_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(54),_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_UploadForm_css__WEBPACK_IMPORTED_MODULE_2__);function FilesList({files:files}){return files.length<1?null:react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,files.map(({path:path,name:name})=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:path},name)))}function UploadForm({step:step,onChooseFiles:onChooseFiles,onSubmit:onSubmit,onChooseOutputDir:onChooseOutputDir,selectedFiles:selectedFiles=[],outputDir:outputDir}){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form",{onSubmit:onSubmit,id:"form"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("step-1",{[_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.hidden]:1!==step})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.label)},"Select files …",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{onChange:onChooseFiles,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.input),id:"inputFile",type:"file",multiple:!0}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("step-2",{[_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.hidden]:2!==step})},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilesList,{files:selectedFiles}),outputDir,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{onClick:onChooseOutputDir,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.button),type:"button"},"Output directory …"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.convert)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_UploadForm_css__WEBPACK_IMPORTED_MODULE_2___default.a.button),type:"submit"},"Convert"))))}},241:function(module,__webpack_exports__,__webpack_require__){"use strict";var react=__webpack_require__(0),react_default=__webpack_require__.n(react),layout=(__webpack_require__(721),__webpack_require__(810)),AppLayout=__webpack_require__(163),AppLayout_default=__webpack_require__.n(AppLayout),menu=(__webpack_require__.p,__webpack_require__(811)),classnames=__webpack_require__(3),classnames_default=__webpack_require__.n(classnames),Icon=__webpack_require__(364),Icon_default=__webpack_require__.n(Icon);function Icon_Icon({children:children}){return react.createElement("span",{className:Icon_default.a.icon},children)}function AllIcon(){return react.createElement(Icon_Icon,null,react.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 4.18C3 3.5283 3.5283 3 4.18 3H6V6H3V4.18ZM3 8H6V11H3V8ZM1 4.18V7V12V17V19.82C1 21.5763 2.42373 23 4.18 23H7H17H19.82C21.5763 23 23 21.5763 23 19.82V17V12V7V4.18C23 2.42373 21.5763 1 19.82 1H17H7H4.18C2.42373 1 1 2.42373 1 4.18ZM21 6V4.18C21 3.5283 20.4717 3 19.82 3H18V6H21ZM18 8H21V11H18V8ZM16 7V3H8V7V11H16V7ZM21 13V16H18V13H21ZM21 18H18V21H19.82C20.4717 21 21 20.4717 21 19.82V18ZM16 13V17V21H8V17V13H16ZM3 18V19.82C3 20.4717 3.5283 21 4.18 21H6V18H3ZM6 16H3V13H6V16Z",fill:"#9DA5B1"})))}function QueueIcon(){return react.createElement(Icon_Icon,null,react.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},react.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.3788 11.214 12.725 11.5528 12.8944L15.5528 14.8944C16.0468 15.1414 16.6474 14.9412 16.8944 14.4472C17.1414 13.9532 16.9412 13.3526 16.4472 13.1056L13 11.382V6Z",fill:"#9DA5B1"})))}var logo_about=__webpack_require__.p+"0b3f4131bd3386c5f5fd2282b1610a41.svg",About=__webpack_require__(99),About_default=__webpack_require__.n(About);function About_About(){return react.createElement("div",{className:About_default.a.about},react.createElement("div",{className:About_default.a.logo},react.createElement("img",{src:logo_about,alt:""})),react.createElement("div",{className:About_default.a.info},react.createElement("div",{className:About_default.a.name},"SlimerApp"),react.createElement("div",{className:About_default.a.version},"v0.0.1")))}var Sidebar=__webpack_require__(127),Sidebar_default=__webpack_require__.n(Sidebar);const{Sider:Sider}=layout.a,menuItemLabel=classnames_default()("nav-text",Sidebar_default.a.menuItemLabel);function Sidebar_Sidebar(){return react.createElement(Sider,{className:Sidebar_default.a.sidebar,theme:"light",width:266,onBreakpoint:broken=>{console.log(broken)},onCollapse:(collapsed,type)=>{console.log(collapsed,type)}},react.createElement(menu.a,{mode:"inline",style:{borderRight:"none"},defaultSelectedKeys:["4"]},react.createElement(menu.a.Item,{className:Sidebar_default.a.menuItem,key:"1"},react.createElement(AllIcon,null),react.createElement("span",{className:menuItemLabel},"All")),react.createElement(menu.a.Item,{className:Sidebar_default.a.menuItem,key:"2"},react.createElement(QueueIcon,null),react.createElement("span",{className:menuItemLabel},"AllQueue"))),react.createElement(About_About,null))}__webpack_require__.d(__webpack_exports__,"a",(function(){return AppLayout_AppLayout}));const{Header:Header,Content:Content,Footer:Footer,Sider:AppLayout_Sider}=layout.a;function Empty(){return null}function AppLayout_AppLayout({header:header,content:content,onChooseFiles:onChooseFiles}={header:Empty,content:Empty}){return react_default.a.createElement(layout.a,{style:{minHeight:"100%",background:"#fff"}},react_default.a.createElement(Sidebar_Sidebar,null),react_default.a.createElement(layout.a,{className:AppLayout_default.a.app,style:{background:"#fff"}},react_default.a.createElement(Content,null,react_default.a.createElement("div",{className:AppLayout_default.a.app},react_default.a.createElement("main",{className:AppLayout_default.a.main},content),react_default.a.createElement("footer",null)))))}},364:function(module,exports,__webpack_require__){module.exports={icon:"_1CIThB0rZtTc3XfS8AMHto"}},378:function(module,exports,__webpack_require__){__webpack_require__(379),__webpack_require__(525),module.exports=__webpack_require__(526)},443:function(module,exports){},526:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(96);const req=__webpack_require__(719);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)((function loadStories(){req.keys().forEach(filename=>req(filename))}),module)}.call(this,__webpack_require__(190)(module))},54:function(module,exports,__webpack_require__){module.exports={hidden:"_2G4GB-i3DnufrZv2zo41Am",label:"_2Q08gBzlxF-QE3qQhF8wL5",input:"_1hVd3WHgEpL8NyskrdaWWz",button:"_3-_tSfftz0ZKVgLAmcaZx0",convert:"_3eXQWYSe2PxTg24FVVFfdF"}},719:function(module,exports,__webpack_require__){var map={"./renderer/AppLayout.stories.jsx":720,"./renderer/UploadForm.stories.jsx":808};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=719},720:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(96),_AppLayout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(241);const files=[{name:"Promo",path:"/user/Promo"}];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("App layout",module).addDecorator(storyFn=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style",null,"#root{height: 100%}"),storyFn())).add("step 1",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppLayout__WEBPACK_IMPORTED_MODULE_2__.a,{step:1})).add("step 2",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppLayout__WEBPACK_IMPORTED_MODULE_2__.a,{step:2,selectedFiles:files}))}.call(this,__webpack_require__(190)(module))},808:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(96),_UploadForm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(240);const files=[{name:"Promo",path:"/user/Promo"}];Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("UploadForm",module).add("step 1",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadForm__WEBPACK_IMPORTED_MODULE_2__.a,{step:1})).add("step 2",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadForm__WEBPACK_IMPORTED_MODULE_2__.a,{step:2,selectedFiles:files}))}.call(this,__webpack_require__(190)(module))},99:function(module,exports,__webpack_require__){module.exports={about:"_1EU-58SKch-g724tgU0UJ9",logo:"_3f2l0pdPKQ2BY7iIr_RyM2",info:"_3Gs1-HRddCqd5S6xyvndR6",name:"_3vDyiQUwiXgxWgvy0xO3Wd",version:"_1rw9x9_2zikIYjStOidQ9I"}}},[[378,1,2]]]);
//# sourceMappingURL=main.69f6fcae2958e23289da.bundle.js.map