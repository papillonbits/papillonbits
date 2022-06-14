import { conceptRoute } from './concept'
import { accessibilityRoute } from './accessibility'
import { applicationArchitectureRoute } from './applicationArchitecture'
import { bootstrapRoute } from './bootstrap'
import { codeStyleRoute } from './codeStyle'
import { compilingRoute } from './compiling'
import { componentDesignRoute } from './componentDesign'
import { componentDrivenDevelopmentRoute } from './componentDrivenDevelopment'
import { continuousDeliveryRoute } from './continuousDelivery'
import { continuousIntegrationRoute } from './continuousIntegration'
import { crossBrowserCompatibilityRoute } from './crossBrowserCompatibility'
import { cssArchitectureRoute } from './cssArchitecture'
import { languageRoute } from './language'
import { localDevelopmentRoute } from './localDevelopment'
import { micrositeRoute } from './microsite'
import { monorepoRoute } from './monorepo'
import { renderingRoute } from './rendering'
import { routingRoute } from './routing'
import { runtimeRoute } from './runtime'
import { testingRoute } from './testing'
import { versionControlRoute } from './versionControl'

export const conceptPageRoute = {
  concept: conceptRoute,
  accessibility: accessibilityRoute,
  applicationArchitecture: applicationArchitectureRoute,
  bootstrap: bootstrapRoute,
  codeStyle: codeStyleRoute,
  compiling: compilingRoute,
  componentDesign: componentDesignRoute,
  componentDrivenDevelopment: componentDrivenDevelopmentRoute,
  continuousDelivery: continuousDeliveryRoute,
  continuousIntegration: continuousIntegrationRoute,
  crossBrowserCompatibility: crossBrowserCompatibilityRoute,
  cssArchitecture: cssArchitectureRoute,
  language: languageRoute,
  localDevelopment: localDevelopmentRoute,
  microsite: micrositeRoute,
  monorepo: monorepoRoute,
  rendering: renderingRoute,
  routing: routingRoute,
  runtime: runtimeRoute,
  testing: testingRoute,
  versionControl: versionControlRoute,
}
