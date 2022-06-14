const homePath = '/'
const conceptPath = {
  concept: '/concept',
  accessibility: '/concept/accessibility',
  applicationArchitecture: '/concept/application-architecture',
  bootstrap: '/concept/bootstrap',
  codeStyle: '/concept/code-style',
  compiling: '/concept/compiling',
  componentDesign: '/concept/component-design',
  componentDrivenDevelopment: '/concept/component-driven-development',
  continuousDelivery: '/concept/continuous-delivery',
  continuousIntegration: '/concept/continuous-integration',
  crossBrowserCompatibility: '/concept/cross-browser-compatibility',
  cssArchitecture: '/concept/css-architecture',
  language: '/concept/language',
  localDevelopment: '/concept/local-development',
  microsite: '/concept/microsite',
  monorepo: '/concept/monorepo',
  rendering: '/concept/rendering',
  routing: '/concept/routing',
  runtime: '/concept/runtime',
  testing: '/concept/testing',
  versionControl: '/concept/version-control',
}
const componentsPath = {
  components: '/components',
  breadcrumb: '/components/breadcrumb',
}

export const homePagePath = process.env.BASE_URL ? `${process.env.BASE_URL}${homePath}` : homePath
export const conceptPagePath = {
  concept: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.concept}` : conceptPath.concept,
  accessibility: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.accessibility}` : conceptPath.accessibility,
  applicationArchitecture: process.env.BASE_URL
    ? `${process.env.BASE_URL}${conceptPath.applicationArchitecture}`
    : conceptPath.applicationArchitecture,
  bootstrap: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.bootstrap}` : conceptPath.bootstrap,
  codeStyle: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.codeStyle}` : conceptPath.codeStyle,
  compiling: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.compiling}` : conceptPath.compiling,
  componentDesign: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.componentDesign}` : conceptPath.componentDesign,
  componentDrivenDevelopment: process.env.BASE_URL
    ? `${process.env.BASE_URL}${conceptPath.componentDrivenDevelopment}`
    : conceptPath.componentDrivenDevelopment,
  continuousDelivery: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.continuousDelivery}` : conceptPath.continuousDelivery,
  continuousIntegration: process.env.BASE_URL
    ? `${process.env.BASE_URL}${conceptPath.continuousIntegration}`
    : conceptPath.continuousIntegration,
  crossBrowserCompatibility: process.env.BASE_URL
    ? `${process.env.BASE_URL}${conceptPath.crossBrowserCompatibility}`
    : conceptPath.crossBrowserCompatibility,
  cssArchitecture: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.cssArchitecture}` : conceptPath.cssArchitecture,
  language: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.language}` : conceptPath.language,
  localDevelopment: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.localDevelopment}` : conceptPath.localDevelopment,
  microsite: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.microsite}` : conceptPath.microsite,
  monorepo: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.monorepo}` : conceptPath.monorepo,
  rendering: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.rendering}` : conceptPath.rendering,
  routing: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.routing}` : conceptPath.routing,
  runtime: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.runtime}` : conceptPath.runtime,
  testing: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.testing}` : conceptPath.testing,
  versionControl: process.env.BASE_URL ? `${process.env.BASE_URL}${conceptPath.versionControl}` : conceptPath.versionControl,
}
export const componentsPagePath = {
  components: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.components}` : componentsPath.components,
  breadcrumb: process.env.BASE_URL ? `${process.env.BASE_URL}${componentsPath.breadcrumb}` : componentsPath.breadcrumb,
}
