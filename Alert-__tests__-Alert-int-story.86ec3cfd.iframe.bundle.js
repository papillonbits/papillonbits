"use strict";(self.webpackChunkpapillonbits=self.webpackChunkpapillonbits||[]).push([[471],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./packages/components/src/primer/Alert/__tests__/Alert.int.story.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,consent:()=>consent,consentWithInput:()=>consentWithInput,default:()=>Alert_int_story,error:()=>error,info:()=>info,regular:()=>regular,regularMultipleParagraphs:()=>regularMultipleParagraphs,success:()=>success,warning:()=>warning});var _regular$parameters,_regular$parameters2,_regular$parameters2$,_regularMultipleParag,_regularMultipleParag2,_regularMultipleParag3,_info$parameters,_info$parameters2,_info$parameters2$doc,_warning$parameters,_warning$parameters2,_warning$parameters2$,_error$parameters,_error$parameters2,_error$parameters2$do,_success$parameters,_success$parameters2,_success$parameters2$,_consent$parameters,_consent$parameters2,_consent$parameters2$,_consentWithInput$par,_consentWithInput$par2,_consentWithInput$par3,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),addon_jest_dist=__webpack_require__("./node_modules/@storybook/addon-jest/dist/index.mjs"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),alertVariant={default:"default",info:"info",warning:"warning",error:"error",success:"success",consent:"consent"},_jest_test_results=((0,prop_types.shape)({default:prop_types.string,approve:prop_types.string,cancel:prop_types.string,value:prop_types.string}),prop_types.string,(0,prop_types.oneOf)(Object.keys(alertVariant)),prop_types.node.isRequired,(0,prop_types.shape)({action:(0,prop_types.shape)({approve:prop_types.func,cancel:prop_types.func}),withInput:prop_types.bool}),alertVariant.default,__webpack_require__("./.jest-test-results.json")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var children="Flash message goes here.",Alert=__webpack_require__("./packages/components/build/index.js").K.Alert.Alert;const Alert_int_story={title:"Primer/Molecule/Alert",component:Alert,decorators:[(0,addon_jest_dist.x)({results:_jest_test_results})],parameters:{jest:["Alert.int.test.js"]},excludeStories:["custom"]};function regular(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.default,children})}function regularMultipleParagraphs(){return(0,jsx_runtime.jsxs)(Alert,{variant:alertVariant.default,children:[(0,jsx_runtime.jsx)("p",{children:"This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line."}),(0,jsx_runtime.jsx)("p",{children:"And this is another paragraph."})]})}function info(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.info,children})}function warning(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.warning,children})}function error(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.error,children})}function success(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.success,children})}function consent(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.consent,consent:{action:{approve:(0,dist.aD)("Approved"),cancel:(0,dist.aD)("Cancelled")}},children})}function consentWithInput(){return(0,jsx_runtime.jsx)(Alert,{variant:alertVariant.consent,consent:{action:{approve:(0,dist.aD)("Approved"),cancel:(0,dist.aD)("Cancelled")},withInput:!0},children})}regular.displayName="regular",regularMultipleParagraphs.displayName="regularMultipleParagraphs",info.displayName="info",warning.displayName="warning",error.displayName="error",success.displayName="success",consent.displayName="consent",consentWithInput.displayName="consentWithInput",regular.parameters=_objectSpread(_objectSpread({},regular.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_regular$parameters=regular.parameters)||void 0===_regular$parameters?void 0:_regular$parameters.docs),{},{source:_objectSpread({originalSource:"function regular() {\n  return <Alert variant={alertVariant.default}>{children}</Alert>;\n}"},null===(_regular$parameters2=regular.parameters)||void 0===_regular$parameters2||null===(_regular$parameters2$=_regular$parameters2.docs)||void 0===_regular$parameters2$?void 0:_regular$parameters2$.source)})}),regularMultipleParagraphs.parameters=_objectSpread(_objectSpread({},regularMultipleParagraphs.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_regularMultipleParag=regularMultipleParagraphs.parameters)||void 0===_regularMultipleParag?void 0:_regularMultipleParag.docs),{},{source:_objectSpread({originalSource:"function regularMultipleParagraphs() {\n  return <Alert variant={alertVariant.default}>\n      <p>\n        This is a longer flash message in it&apos;s own paragraph. It ends up looking something like this. If we keep adding more text,\n        it&apos;ll eventually wrap to a new line.\n      </p>\n      <p>And this is another paragraph.</p>\n    </Alert>;\n}"},null===(_regularMultipleParag2=regularMultipleParagraphs.parameters)||void 0===_regularMultipleParag2||null===(_regularMultipleParag3=_regularMultipleParag2.docs)||void 0===_regularMultipleParag3?void 0:_regularMultipleParag3.source)})}),info.parameters=_objectSpread(_objectSpread({},info.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_info$parameters=info.parameters)||void 0===_info$parameters?void 0:_info$parameters.docs),{},{source:_objectSpread({originalSource:"function info() {\n  return <Alert variant={alertVariant.info}>{children}</Alert>;\n}"},null===(_info$parameters2=info.parameters)||void 0===_info$parameters2||null===(_info$parameters2$doc=_info$parameters2.docs)||void 0===_info$parameters2$doc?void 0:_info$parameters2$doc.source)})}),warning.parameters=_objectSpread(_objectSpread({},warning.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_warning$parameters=warning.parameters)||void 0===_warning$parameters?void 0:_warning$parameters.docs),{},{source:_objectSpread({originalSource:"function warning() {\n  return <Alert variant={alertVariant.warning}>{children}</Alert>;\n}"},null===(_warning$parameters2=warning.parameters)||void 0===_warning$parameters2||null===(_warning$parameters2$=_warning$parameters2.docs)||void 0===_warning$parameters2$?void 0:_warning$parameters2$.source)})}),error.parameters=_objectSpread(_objectSpread({},error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_error$parameters=error.parameters)||void 0===_error$parameters?void 0:_error$parameters.docs),{},{source:_objectSpread({originalSource:"function error() {\n  return <Alert variant={alertVariant.error}>{children}</Alert>;\n}"},null===(_error$parameters2=error.parameters)||void 0===_error$parameters2||null===(_error$parameters2$do=_error$parameters2.docs)||void 0===_error$parameters2$do?void 0:_error$parameters2$do.source)})}),success.parameters=_objectSpread(_objectSpread({},success.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_success$parameters=success.parameters)||void 0===_success$parameters?void 0:_success$parameters.docs),{},{source:_objectSpread({originalSource:"function success() {\n  return <Alert variant={alertVariant.success}>{children}</Alert>;\n}"},null===(_success$parameters2=success.parameters)||void 0===_success$parameters2||null===(_success$parameters2$=_success$parameters2.docs)||void 0===_success$parameters2$?void 0:_success$parameters2$.source)})}),consent.parameters=_objectSpread(_objectSpread({},consent.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_consent$parameters=consent.parameters)||void 0===_consent$parameters?void 0:_consent$parameters.docs),{},{source:_objectSpread({originalSource:"function consent() {\n  return <Alert variant={alertVariant.consent} consent={{\n    action: {\n      approve: action('Approved'),\n      cancel: action('Cancelled')\n    }\n  }}>\n      {children}\n    </Alert>;\n}"},null===(_consent$parameters2=consent.parameters)||void 0===_consent$parameters2||null===(_consent$parameters2$=_consent$parameters2.docs)||void 0===_consent$parameters2$?void 0:_consent$parameters2$.source)})}),consentWithInput.parameters=_objectSpread(_objectSpread({},consentWithInput.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_consentWithInput$par=consentWithInput.parameters)||void 0===_consentWithInput$par?void 0:_consentWithInput$par.docs),{},{source:_objectSpread({originalSource:"function consentWithInput() {\n  return <Alert variant={alertVariant.consent} consent={{\n    action: {\n      approve: action('Approved'),\n      cancel: action('Cancelled')\n    },\n    withInput: true\n  }}>\n      {children}\n    </Alert>;\n}"},null===(_consentWithInput$par2=consentWithInput.parameters)||void 0===_consentWithInput$par2||null===(_consentWithInput$par3=_consentWithInput$par2.docs)||void 0===_consentWithInput$par3?void 0:_consentWithInput$par3.source)})});var __namedExportsOrder=["regular","regularMultipleParagraphs","info","warning","error","success","consent","consentWithInput"];regular.__docgenInfo={description:"",methods:[],displayName:"regular"},regularMultipleParagraphs.__docgenInfo={description:"",methods:[],displayName:"regularMultipleParagraphs"},info.__docgenInfo={description:"",methods:[],displayName:"info"},warning.__docgenInfo={description:"",methods:[],displayName:"warning"},error.__docgenInfo={description:"",methods:[],displayName:"error"},success.__docgenInfo={description:"",methods:[],displayName:"success"},consent.__docgenInfo={description:"",methods:[],displayName:"consent"},consentWithInput.__docgenInfo={description:"",methods:[],displayName:"consentWithInput"}}}]);