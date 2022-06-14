import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const applicationArchitectureRoute = {
  path: conceptPagePath.applicationArchitecture,
  clientComponent: ConceptPage.ApplicationArchitecture.AsyncApplicationArchitecture,
  serverComponent: ConceptPage.ApplicationArchitecture.ApplicationArchitecture,
}
