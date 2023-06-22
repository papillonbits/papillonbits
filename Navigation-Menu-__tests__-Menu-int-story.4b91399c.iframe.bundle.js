"use strict";(self.webpackChunkpapillonbits=self.webpackChunkpapillonbits||[]).push([[242],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./packages/components/src/primer/Navigation/Menu/__tests__/Menu.int.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,ariaAttr:()=>ariaAttr,custom:()=>custom,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultItems:()=>defaultItems,heading:()=>heading,iconItems:()=>iconItems,regular:()=>regular,withHeading:()=>withHeading,withIcons:()=>withIcons});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-jest/dist/index.mjs"),_Icon_Icon_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/primer/Icon/Icon.prop.js"),_jest_test_results_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.jest-test-results.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Menu=__webpack_require__("./packages/components/src/index.js").K.Navigation.Menu;const __WEBPACK_DEFAULT_EXPORT__={title:"Primer/Molecule/Navigation/Menu",component:Menu,decorators:[(0,_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__.x)({results:_jest_test_results_json__WEBPACK_IMPORTED_MODULE_3__})],parameters:{storySource:{source:"import { action } from '@storybook/addon-actions'\nimport { withTests } from '@storybook/addon-jest'\nimport { iconName } from '../../../Icon/Icon.prop'\nimport results from '../../../../../../../.jest-test-results.json'\n\nconst Menu =\n  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'\n    ? require('../../../../index').primer.Navigation.Menu\n    : require('../../../../../build').primer.Navigation.Menu\n\nexport default {\n  title: 'Primer/Molecule/Navigation/Menu',\n  component: Menu,\n  decorators: [withTests({ results })],\n  parameters: { jest: ['Menu.int.test.js'] },\n  excludeStories: ['heading', 'ariaAttr', 'defaultItems', 'iconItems', 'custom'],\n}\n\nexport const heading = 'Menu heading'\n\nexport const ariaAttr = {\n  label: 'Person settings',\n  labelledBy: 'menu-heading',\n  current: 'page',\n}\n\nexport const defaultItems = [\n  { href: '#url', text: 'Account', isSelected: true },\n  { href: '#url', text: 'Profile', isSelected: false },\n  { href: '#url', text: 'Emails', isSelected: false },\n  { href: '#url', text: 'Notifications', isSelected: false },\n]\n\nexport const iconItems = [\n  { href: '#url', icon: iconName.Tools16, text: 'Account', isSelected: true },\n  { href: '#url', icon: iconName.Person16, text: 'Profile', isSelected: false },\n  { href: '#url', icon: iconName.Mail16, text: 'Emails', isSelected: false },\n  { href: '#url', icon: iconName.Broadcast16, text: 'Notifications', isSelected: false },\n]\n\nexport function custom(onClick) {\n  return <Menu ariaAttr={ariaAttr} items={defaultItems} onClick={onClick} />\n}\n\nexport function regular() {\n  return <Menu ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />\n}\n\nexport function withIcons() {\n  return <Menu ariaAttr={ariaAttr} items={iconItems} onClick={action('onClick')} />\n}\n\nexport function withHeading() {\n  return <Menu heading={heading} ariaAttr={ariaAttr} items={defaultItems} onClick={action('onClick')} />\n}\n",locationsMap:{"aria-attr":{startLoc:{col:24,line:21},endLoc:{col:1,line:25},startBody:{col:24,line:21},endBody:{col:1,line:25}},custom:{startLoc:{col:7,line:41},endLoc:{col:1,line:43},startBody:{col:7,line:41},endBody:{col:1,line:43}},regular:{startLoc:{col:7,line:45},endLoc:{col:1,line:47},startBody:{col:7,line:45},endBody:{col:1,line:47}},"with-icons":{startLoc:{col:7,line:49},endLoc:{col:1,line:51},startBody:{col:7,line:49},endBody:{col:1,line:51}},"with-heading":{startLoc:{col:7,line:53},endLoc:{col:1,line:55},startBody:{col:7,line:53},endBody:{col:1,line:55}}}},jest:["Menu.int.test.js"]},excludeStories:["heading","ariaAttr","defaultItems","iconItems","custom"]};var heading="Menu heading",ariaAttr={label:"Person settings",labelledBy:"menu-heading",current:"page"},defaultItems=[{href:"#url",text:"Account",isSelected:!0},{href:"#url",text:"Profile",isSelected:!1},{href:"#url",text:"Emails",isSelected:!1},{href:"#url",text:"Notifications",isSelected:!1}],iconItems=[{href:"#url",icon:_Icon_Icon_prop__WEBPACK_IMPORTED_MODULE_2__.fK.Tools16,text:"Account",isSelected:!0},{href:"#url",icon:_Icon_Icon_prop__WEBPACK_IMPORTED_MODULE_2__.fK.Person16,text:"Profile",isSelected:!1},{href:"#url",icon:_Icon_Icon_prop__WEBPACK_IMPORTED_MODULE_2__.fK.Mail16,text:"Emails",isSelected:!1},{href:"#url",icon:_Icon_Icon_prop__WEBPACK_IMPORTED_MODULE_2__.fK.Broadcast16,text:"Notifications",isSelected:!1}];function custom(onClick){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Menu,{ariaAttr,items:defaultItems,onClick})}custom.displayName="custom";var regular=function regular(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Menu,{ariaAttr,items:defaultItems,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onClick")})};regular.displayName="regular";var withIcons=function withIcons(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Menu,{ariaAttr,items:iconItems,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onClick")})};withIcons.displayName="withIcons";var withHeading=function withHeading(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Menu,{heading,ariaAttr,items:defaultItems,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("onClick")})};withHeading.displayName="withHeading";var __namedExportsOrder=["heading","ariaAttr","defaultItems","iconItems","custom","regular","withIcons","withHeading"];custom.__docgenInfo={description:"",methods:[],displayName:"custom"},regular.__docgenInfo={description:"",methods:[],displayName:"regular"},withIcons.__docgenInfo={description:"",methods:[],displayName:"withIcons"},withHeading.__docgenInfo={description:"",methods:[],displayName:"withHeading"}}}]);