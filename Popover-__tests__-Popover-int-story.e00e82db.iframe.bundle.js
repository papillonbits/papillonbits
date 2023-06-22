"use strict";(self.webpackChunkpapillonbits=self.webpackChunkpapillonbits||[]).push([[732],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./packages/components/src/primer/Popover/__tests__/Popover.int.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,bottom:()=>bottom,bottomLeft:()=>bottomLeft,bottomRight:()=>bottomRight,custom:()=>custom,default:()=>__WEBPACK_DEFAULT_EXPORT__,left:()=>left,leftBottom:()=>leftBottom,leftTop:()=>leftTop,regular:()=>regular,regularLarge:()=>regularLarge,right:()=>right,rightBottom:()=>rightBottom,rightTop:()=>rightTop,topLeft:()=>topLeft,topRight:()=>topRight});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-jest/dist/index.mjs"),_Popover_prop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/primer/Popover/Popover.prop.js"),_jest_test_results_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.jest-test-results.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Popover=__webpack_require__("./packages/components/src/index.js").K.Popover.Popover;const __WEBPACK_DEFAULT_EXPORT__={title:"Primer/Molecule/Popover",component:Popover,decorators:[(0,_storybook_addon_jest__WEBPACK_IMPORTED_MODULE_1__.x)({results:_jest_test_results_json__WEBPACK_IMPORTED_MODULE_3__})],parameters:{storySource:{source:"import { action } from '@storybook/addon-actions'\nimport { withTests } from '@storybook/addon-jest'\nimport { popoverVariant, popoverSize } from '../Popover.prop'\nimport results from '../../../../../../.jest-test-results.json'\n\nconst Popover =\n  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'\n    ? require('../../../index').primer.Popover.Popover\n    : require('../../../../build').primer.Popover.Popover\n\nexport default {\n  title: 'Primer/Molecule/Popover',\n  component: Popover,\n  decorators: [withTests({ results })],\n  parameters: { jest: ['Popover.int.test.js'] },\n  excludeStories: ['custom'],\n}\n\nconst intro = 'UI'\nconst heading = 'Popover heading'\nconst message = 'Message about this particular piece of UI.'\nconst acknowledge = 'Got it!'\n\nexport function custom(introOnClick, acknowledgeOnClick) {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      introOnClick={introOnClick}\n      acknowledgeOnClick={acknowledgeOnClick}\n    />\n  )\n}\n\nexport function regular() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function regularLarge() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      size={popoverSize.large}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function bottom() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.bottom}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function bottomRight() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.bottomRight}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function bottomLeft() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.bottomLeft}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function left() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.left}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function leftBottom() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.leftBottom}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function leftTop() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.leftTop}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function right() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.right}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function rightBottom() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.rightBottom}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function rightTop() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.rightTop}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function topLeft() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.topLeft}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n\nexport function topRight() {\n  return (\n    <Popover\n      intro={intro}\n      heading={heading}\n      message={message}\n      acknowledge={acknowledge}\n      variant={popoverVariant.topright}\n      introOnClick={action('introOnClick')}\n      acknowledgeOnClick={action('acknowledgeOnClick')}\n    />\n  )\n}\n",locationsMap:{custom:{startLoc:{col:7,line:24},endLoc:{col:1,line:35},startBody:{col:7,line:24},endBody:{col:1,line:35}},regular:{startLoc:{col:7,line:37},endLoc:{col:1,line:48},startBody:{col:7,line:37},endBody:{col:1,line:48}},"regular-large":{startLoc:{col:7,line:50},endLoc:{col:1,line:62},startBody:{col:7,line:50},endBody:{col:1,line:62}},bottom:{startLoc:{col:7,line:64},endLoc:{col:1,line:76},startBody:{col:7,line:64},endBody:{col:1,line:76}},"bottom-right":{startLoc:{col:7,line:78},endLoc:{col:1,line:90},startBody:{col:7,line:78},endBody:{col:1,line:90}},"bottom-left":{startLoc:{col:7,line:92},endLoc:{col:1,line:104},startBody:{col:7,line:92},endBody:{col:1,line:104}},left:{startLoc:{col:7,line:106},endLoc:{col:1,line:118},startBody:{col:7,line:106},endBody:{col:1,line:118}},"left-bottom":{startLoc:{col:7,line:120},endLoc:{col:1,line:132},startBody:{col:7,line:120},endBody:{col:1,line:132}},"left-top":{startLoc:{col:7,line:134},endLoc:{col:1,line:146},startBody:{col:7,line:134},endBody:{col:1,line:146}},right:{startLoc:{col:7,line:148},endLoc:{col:1,line:160},startBody:{col:7,line:148},endBody:{col:1,line:160}},"right-bottom":{startLoc:{col:7,line:162},endLoc:{col:1,line:174},startBody:{col:7,line:162},endBody:{col:1,line:174}},"right-top":{startLoc:{col:7,line:176},endLoc:{col:1,line:188},startBody:{col:7,line:176},endBody:{col:1,line:188}},"top-left":{startLoc:{col:7,line:190},endLoc:{col:1,line:202},startBody:{col:7,line:190},endBody:{col:1,line:202}},"top-right":{startLoc:{col:7,line:204},endLoc:{col:1,line:216},startBody:{col:7,line:204},endBody:{col:1,line:216}}}},jest:["Popover.int.test.js"]},excludeStories:["custom"]};var intro="UI",heading="Popover heading",message="Message about this particular piece of UI.",acknowledge="Got it!";function custom(introOnClick,acknowledgeOnClick){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,introOnClick,acknowledgeOnClick})}custom.displayName="custom";var regular=function regular(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};regular.displayName="regular";var regularLarge=function regularLarge(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,size:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.pD.large,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};regularLarge.displayName="regularLarge";var bottom=function bottom(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.bottom,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};bottom.displayName="bottom";var bottomRight=function bottomRight(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.bottomRight,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};bottomRight.displayName="bottomRight";var bottomLeft=function bottomLeft(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.bottomLeft,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};bottomLeft.displayName="bottomLeft";var left=function left(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.left,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};left.displayName="left";var leftBottom=function leftBottom(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.leftBottom,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};leftBottom.displayName="leftBottom";var leftTop=function leftTop(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.leftTop,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};leftTop.displayName="leftTop";var right=function right(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.right,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};right.displayName="right";var rightBottom=function rightBottom(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.rightBottom,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};rightBottom.displayName="rightBottom";var rightTop=function rightTop(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.rightTop,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};rightTop.displayName="rightTop";var topLeft=function topLeft(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.topLeft,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};topLeft.displayName="topLeft";var topRight=function topRight(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Popover,{intro,heading,message,acknowledge,variant:_Popover_prop__WEBPACK_IMPORTED_MODULE_2__.Bn.topright,introOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("introOnClick"),acknowledgeOnClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("acknowledgeOnClick")})};topRight.displayName="topRight";var __namedExportsOrder=["custom","regular","regularLarge","bottom","bottomRight","bottomLeft","left","leftBottom","leftTop","right","rightBottom","rightTop","topLeft","topRight"];custom.__docgenInfo={description:"",methods:[],displayName:"custom"},regular.__docgenInfo={description:"",methods:[],displayName:"regular"},regularLarge.__docgenInfo={description:"",methods:[],displayName:"regularLarge"},bottom.__docgenInfo={description:"",methods:[],displayName:"bottom"},bottomRight.__docgenInfo={description:"",methods:[],displayName:"bottomRight"},bottomLeft.__docgenInfo={description:"",methods:[],displayName:"bottomLeft"},left.__docgenInfo={description:"",methods:[],displayName:"left"},leftBottom.__docgenInfo={description:"",methods:[],displayName:"leftBottom"},leftTop.__docgenInfo={description:"",methods:[],displayName:"leftTop"},right.__docgenInfo={description:"",methods:[],displayName:"right"},rightBottom.__docgenInfo={description:"",methods:[],displayName:"rightBottom"},rightTop.__docgenInfo={description:"",methods:[],displayName:"rightTop"},topLeft.__docgenInfo={description:"",methods:[],displayName:"topLeft"},topRight.__docgenInfo={description:"",methods:[],displayName:"topRight"}}}]);