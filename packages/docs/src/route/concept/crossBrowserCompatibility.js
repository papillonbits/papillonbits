import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const crossBrowserCompatibilityRoute = {
  path: conceptPagePath.crossBrowserCompatibility,
  clientComponent: ConceptPage.CrossBrowserCompatibility.AsyncCrossBrowserCompatibility,
  serverComponent: ConceptPage.CrossBrowserCompatibility.CrossBrowserCompatibility,
}
