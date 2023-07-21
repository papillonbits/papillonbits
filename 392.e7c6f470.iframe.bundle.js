/*! For license information please see 392.e7c6f470.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpapillonbits=self.webpackChunkpapillonbits||[]).push([[392],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_AY7I2SME.aD});var chunk_AY7I2SME=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-AY7I2SME.mjs")},"./node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VK:()=>BrowserRouter,rU:()=>Link});var router_Action,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(router_Action||(router_Action={}));const PopStateEventType="popstate";function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function warning(cond,message){if(!cond){"undefined"!=typeof console&&console.warn(message);try{throw new Error(message)}catch(e){}}}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?router_parsePath(to):to,{state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function createPath(_ref){let{pathname="/",search="",hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function router_parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window=document.defaultView,v5Compat=!1}=options,globalHistory=window.history,action=router_Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=router_Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action,location:history.location,delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref:to=>createHref(window,to),createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=router_Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){if(error instanceof DOMException&&"DataCloneError"===error.name)throw error;window.location.assign(url)}v5Compat&&listener&&listener({action,location:history.location,delta:1})},replace:function replace(to,state){action=router_Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action,location:history.location,delta:0})},go:n=>globalHistory.go(n)};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function router_stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function router_resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=router_parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search="",hash=""}="string"==typeof to?router_parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const router_joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";Error;const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function dist_extends(){return dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},dist_extends.apply(this,arguments)}const DataRouterContext=react.createContext(null);DataRouterContext.displayName="DataRouter";const DataRouterStateContext=react.createContext(null);DataRouterStateContext.displayName="DataRouterState";const AwaitContext=react.createContext(null);AwaitContext.displayName="Await";const NavigationContext=react.createContext(null);NavigationContext.displayName="Navigation";const LocationContext=react.createContext(null);LocationContext.displayName="Location";const RouteContext=react.createContext({outlet:null,matches:[],isDataRoute:!1});RouteContext.displayName="Route";const RouteErrorContext=react.createContext(null);function useInRouterContext(){return null!=react.useContext(LocationContext)}function dist_useLocation(){return useInRouterContext()||invariant(!1,"useLocation() may be used only in the context of a <Router> component."),react.useContext(LocationContext).location}RouteErrorContext.displayName="RouteError";const navigateEffectWarning="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function useIsomorphicLayoutEffect(cb){react.useContext(NavigationContext).static||react.useLayoutEffect(cb)}function dist_useNavigate(){let{isDataRoute}=react.useContext(RouteContext);return isDataRoute?function useNavigateStable(){let{router}=useDataRouterContext(DataRouterHook.UseNavigateStable),id=useCurrentRouteId(DataRouterStateHook.UseNavigateStable),activeRef=react.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react.useCallback((function(to,options){void 0===options&&(options={}),warning(activeRef.current,navigateEffectWarning),activeRef.current&&("number"==typeof to?router.navigate(to):router.navigate(to,dist_extends({fromRouteId:id},options)))}),[router,id])}():function useNavigateUnstable(){useInRouterContext()||invariant(!1,"useNavigate() may be used only in the context of a <Router> component.");let dataRouterContext=react.useContext(DataRouterContext),{basename,navigator}=react.useContext(NavigationContext),{matches}=react.useContext(RouteContext),{pathname:locationPathname}=dist_useLocation(),routePathnamesJson=JSON.stringify(getPathContributingMatches(matches).map((match=>match.pathnameBase))),activeRef=react.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react.useCallback((function(to,options){if(void 0===options&&(options={}),warning(activeRef.current,navigateEffectWarning),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=router_resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);null==dataRouterContext&&"/"!==basename&&(path.pathname="/"===path.pathname?basename:router_joinPaths([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname,dataRouterContext])}()}function useResolvedPath(to,_temp2){let{relative}=void 0===_temp2?{}:_temp2,{matches}=react.useContext(RouteContext),{pathname:locationPathname}=dist_useLocation(),routePathnamesJson=JSON.stringify(getPathContributingMatches(matches).map((match=>match.pathnameBase)));return react.useMemo((()=>router_resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}react.Component;var DataRouterHook,DataRouterStateHook;function getDataRouterConsoleError(hookName){return hookName+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function useDataRouterContext(hookName){let ctx=react.useContext(DataRouterContext);return ctx||invariant(!1,getDataRouterConsoleError(hookName)),ctx}function useCurrentRouteId(hookName){let route=function useRouteContext(hookName){let route=react.useContext(RouteContext);return route||invariant(!1,getDataRouterConsoleError(hookName)),route}(hookName),thisRoute=route.matches[route.matches.length-1];return thisRoute.route.id||invariant(!1,hookName+' can only be used on routes that contain a unique "id"'),thisRoute.route.id}!function(DataRouterHook){DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId"}(DataRouterStateHook||(DataRouterStateHook={}));react.startTransition;function dist_Router(_ref5){let{basename:basenameProp="/",children=null,location:locationProp,navigationType=router_Action.Pop,navigator,static:staticProp=!1}=_ref5;useInRouterContext()&&invariant(!1,"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react.useMemo((()=>({basename,navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=router_parsePath(locationProp));let{pathname="/",search="",hash="",state=null,key="default"}=locationProp,locationContext=react.useMemo((()=>{let trailingPathname=router_stripBasename(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search,hash,state,key},navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return warning(null!=locationContext,'<Router basename="'+basename+'"> is not able to match the URL "'+pathname+search+hash+"\" because it does not start with the basename, so the <Router> won't render anything."),null==locationContext?null:react.createElement(NavigationContext.Provider,{value:navigationContext},react.createElement(LocationContext.Provider,{children,value:locationContext}))}var AwaitRenderStatus;!function(AwaitRenderStatus){AwaitRenderStatus[AwaitRenderStatus.pending=0]="pending",AwaitRenderStatus[AwaitRenderStatus.success=1]="success",AwaitRenderStatus[AwaitRenderStatus.error=2]="error"}(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise((()=>{}));react.Component;function react_router_dom_dist_extends(){return react_router_dom_dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},react_router_dom_dist_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}const defaultMethod="get",defaultEncType="application/x-www-form-urlencoded";function isHtmlElement(object){return null!=object&&"string"==typeof object.tagName}let _formDataSupportsSubmitter=null;const supportedFormEncTypes=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function getFormEncType(encType){return null==encType||supportedFormEncTypes.has(encType)?encType:(warning(!1,'"'+encType+'" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "'+defaultEncType+'"'),null)}function getFormSubmissionInfo(target,basename){let method,action,encType,formData,body;if(function isFormElement(object){return isHtmlElement(object)&&"form"===object.tagName.toLowerCase()}(target)){let attr=target.getAttribute("action");action=attr?router_stripBasename(attr,basename):null,method=target.getAttribute("method")||defaultMethod,encType=getFormEncType(target.getAttribute("enctype"))||defaultEncType,formData=new FormData(target)}else if(function isButtonElement(object){return isHtmlElement(object)&&"button"===object.tagName.toLowerCase()}(target)||function isInputElement(object){return isHtmlElement(object)&&"input"===object.tagName.toLowerCase()}(target)&&("submit"===target.type||"image"===target.type)){let form=target.form;if(null==form)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let attr=target.getAttribute("formaction")||form.getAttribute("action");if(action=attr?router_stripBasename(attr,basename):null,method=target.getAttribute("formmethod")||form.getAttribute("method")||defaultMethod,encType=getFormEncType(target.getAttribute("formenctype"))||getFormEncType(form.getAttribute("enctype"))||defaultEncType,formData=new FormData(form,target),!function isFormDataSubmitterSupported(){if(null===_formDataSupportsSubmitter)try{new FormData(document.createElement("form"),0),_formDataSupportsSubmitter=!1}catch(e){_formDataSupportsSubmitter=!0}return _formDataSupportsSubmitter}()){let{name,type,value}=target;if("image"===type){let prefix=name?name+".":"";formData.append(prefix+"x","0"),formData.append(prefix+"y","0")}else name&&formData.append(name,value)}}else{if(isHtmlElement(target))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');method=defaultMethod,action=null,encType=defaultEncType,body=target}return formData&&"text/plain"===encType&&(body=formData,formData=void 0),{action,method:method.toLowerCase(),encType,formData,body}}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],_excluded2=["aria-current","caseSensitive","className","end","style","to","children"],_excluded3=["reloadDocument","replace","state","method","action","onSubmit","submit","relative","preventScrollReset"];const dist_startTransitionImpl=react.startTransition;function BrowserRouter(_ref){let{basename,children,future,window}=_ref,historyRef=react.useRef();null==historyRef.current&&(historyRef.current=function router_createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname,search,hash}=window.location;return createLocation("",{pathname,search,hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:createPath(to)}),null,options)}({window,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react.useState({action:history.action,location:history.location}),{v7_startTransition}=future||{},setState=react.useCallback((newState=>{v7_startTransition&&dist_startTransitionImpl?dist_startTransitionImpl((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl,v7_startTransition]);return react.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react.createElement(dist_Router,{basename,children,location:state.location,navigationType:state.action,navigator:history})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,dist_ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react.forwardRef((function LinkWithRef(_ref4,ref){let absoluteHref,{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset}=_ref4,rest=_objectWithoutPropertiesLoose(_ref4,_excluded),{basename}=react.useContext(NavigationContext),isExternal=!1;if("string"==typeof to&&dist_ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=router_stripBasename(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){warning(!1,'<Link to="'+to+'"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.')}let href=function useHref(to,_temp){let{relative}=void 0===_temp?{}:_temp;useInRouterContext()||invariant(!1,"useHref() may be used only in the context of a <Router> component.");let{basename,navigator}=react.useContext(NavigationContext),{hash,pathname,search}=useResolvedPath(to,{relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:router_joinPaths([basename,pathname])),navigator.createHref({pathname:joinedPathname,search,hash})}(to,{relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative}=void 0===_temp?{}:_temp,navigate=dist_useNavigate(),location=dist_useLocation(),path=useResolvedPath(to,{relative});return react.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:createPath(location)===createPath(path);navigate(to,{replace,state,preventScrollReset,relative})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative])}(to,{replace,state,target,preventScrollReset,relative});return react.createElement("a",react_router_dom_dist_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref,target}))}));Link.displayName="Link";react.forwardRef((function NavLinkWithRef(_ref5,ref){let{"aria-current":ariaCurrentProp="page",caseSensitive=!1,className:classNameProp="",end=!1,style:styleProp,to,children}=_ref5,rest=_objectWithoutPropertiesLoose(_ref5,_excluded2),path=useResolvedPath(to,{relative:rest.relative}),location=dist_useLocation(),routerState=react.useContext(DataRouterStateContext),{navigator}=react.useContext(NavigationContext),toPathname=navigator.encodeLocation?navigator.encodeLocation(path).pathname:path.pathname,locationPathname=location.pathname,nextLocationPathname=routerState&&routerState.navigation&&routerState.navigation.location?routerState.navigation.location.pathname:null;caseSensitive||(locationPathname=locationPathname.toLowerCase(),nextLocationPathname=nextLocationPathname?nextLocationPathname.toLowerCase():null,toPathname=toPathname.toLowerCase());let className,isActive=locationPathname===toPathname||!end&&locationPathname.startsWith(toPathname)&&"/"===locationPathname.charAt(toPathname.length),isPending=null!=nextLocationPathname&&(nextLocationPathname===toPathname||!end&&nextLocationPathname.startsWith(toPathname)&&"/"===nextLocationPathname.charAt(toPathname.length)),ariaCurrent=isActive?ariaCurrentProp:void 0;className="function"==typeof classNameProp?classNameProp({isActive,isPending}):[classNameProp,isActive?"active":null,isPending?"pending":null].filter(Boolean).join(" ");let style="function"==typeof styleProp?styleProp({isActive,isPending}):styleProp;return react.createElement(Link,react_router_dom_dist_extends({},rest,{"aria-current":ariaCurrent,className,ref,style,to}),"function"==typeof children?children({isActive,isPending}):children)})).displayName="NavLink";react.forwardRef(((props,ref)=>{let submit=function useSubmit(){let{router}=dist_useDataRouterContext(dist_DataRouterHook.UseSubmit),{basename}=react.useContext(NavigationContext),currentRouteId=function useRouteId(){return useCurrentRouteId(DataRouterStateHook.UseRouteId)}();return react.useCallback((function(target,options){void 0===options&&(options={}),validateClientSideSubmission();let{action,method,encType,formData,body}=getFormSubmissionInfo(target,basename);router.navigate(options.action||action,{preventScrollReset:options.preventScrollReset,formData,body,formMethod:options.method||method,formEncType:options.encType||encType,replace:options.replace,state:options.state,fromRouteId:currentRouteId})}),[router,basename,currentRouteId])}();return react.createElement(FormImpl,react_router_dom_dist_extends({},props,{submit,ref}))})).displayName="Form";const FormImpl=react.forwardRef(((_ref6,forwardedRef)=>{let{reloadDocument,replace,state,method=defaultMethod,action,onSubmit,submit,relative,preventScrollReset}=_ref6,props=_objectWithoutPropertiesLoose(_ref6,_excluded3),formMethod="get"===method.toLowerCase()?"get":"post",formAction=function useFormAction(action,_temp2){let{relative}=void 0===_temp2?{}:_temp2,{basename}=react.useContext(NavigationContext),routeContext=react.useContext(RouteContext);routeContext||invariant(!1,"useFormAction must be used inside a RouteContext");let[match]=routeContext.matches.slice(-1),path=react_router_dom_dist_extends({},useResolvedPath(action||".",{relative})),location=dist_useLocation();if(null==action&&(path.search=location.search,path.hash=location.hash,match.route.index)){let params=new URLSearchParams(path.search);params.delete("index"),path.search=params.toString()?"?"+params.toString():""}action&&"."!==action||!match.route.index||(path.search=path.search?path.search.replace(/^\?/,"?index&"):"?index");"/"!==basename&&(path.pathname="/"===path.pathname?basename:router_joinPaths([basename,path.pathname]));return createPath(path)}(action,{relative});return react.createElement("form",react_router_dom_dist_extends({ref:forwardedRef,method:formMethod,action:formAction,onSubmit:reloadDocument?onSubmit:event=>{if(onSubmit&&onSubmit(event),event.defaultPrevented)return;event.preventDefault();let submitter=event.nativeEvent.submitter,submitMethod=(null==submitter?void 0:submitter.getAttribute("formmethod"))||method;submit(submitter||event.currentTarget,{method:submitMethod,replace,state,relative,preventScrollReset})}},props))}));var dist_DataRouterHook,dist_DataRouterStateHook;function dist_getDataRouterConsoleError(hookName){return hookName+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function dist_useDataRouterContext(hookName){let ctx=react.useContext(DataRouterContext);return ctx||invariant(!1,dist_getDataRouterConsoleError(hookName)),ctx}function validateClientSideSubmission(){if("undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")}FormImpl.displayName="FormImpl",function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmit="useSubmit",DataRouterHook.UseSubmitFetcher="useSubmitFetcher",DataRouterHook.UseFetcher="useFetcher"}(dist_DataRouterHook||(dist_DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(dist_DataRouterStateHook||(dist_DataRouterStateHook={}))},"./node_modules/uuid/dist/esm-browser/v1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _rng_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/uuid/dist/esm-browser/rng.js"),_stringify_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/uuid/dist/esm-browser/stringify.js");let _nodeId,_clockseq,_lastMSecs=0,_lastNSecs=0;const __WEBPACK_DEFAULT_EXPORT__=function v1(options,buf,offset){let i=buf&&offset||0;const b=buf||new Array(16);let node=(options=options||{}).node||_nodeId,clockseq=void 0!==options.clockseq?options.clockseq:_clockseq;if(null==node||null==clockseq){const seedBytes=options.random||(options.rng||_rng_js__WEBPACK_IMPORTED_MODULE_0__.Z)();null==node&&(node=_nodeId=[1|seedBytes[0],seedBytes[1],seedBytes[2],seedBytes[3],seedBytes[4],seedBytes[5]]),null==clockseq&&(clockseq=_clockseq=16383&(seedBytes[6]<<8|seedBytes[7]))}let msecs=void 0!==options.msecs?options.msecs:Date.now(),nsecs=void 0!==options.nsecs?options.nsecs:_lastNSecs+1;const dt=msecs-_lastMSecs+(nsecs-_lastNSecs)/1e4;if(dt<0&&void 0===options.clockseq&&(clockseq=clockseq+1&16383),(dt<0||msecs>_lastMSecs)&&void 0===options.nsecs&&(nsecs=0),nsecs>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");_lastMSecs=msecs,_lastNSecs=nsecs,_clockseq=clockseq,msecs+=122192928e5;const tl=(1e4*(268435455&msecs)+nsecs)%4294967296;b[i++]=tl>>>24&255,b[i++]=tl>>>16&255,b[i++]=tl>>>8&255,b[i++]=255&tl;const tmh=msecs/4294967296*1e4&268435455;b[i++]=tmh>>>8&255,b[i++]=255&tmh,b[i++]=tmh>>>24&15|16,b[i++]=tmh>>>16&255,b[i++]=clockseq>>>8|128,b[i++]=255&clockseq;for(let n=0;n<6;++n)b[i+n]=node[n];return buf||(0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.S)(b)}}}]);