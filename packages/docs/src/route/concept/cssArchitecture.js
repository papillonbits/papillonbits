import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const cssArchitectureRoute = {
  path: conceptPagePath.cssArchitecture,
  clientComponent: ConceptPage.CSSArchitecture.AsyncCSSArchitecture,
  serverComponent: ConceptPage.CSSArchitecture.CSSArchitecture,
}
