import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const testingRoute = {
  path: conceptPagePath.testing,
  clientComponent: ConceptPage.Testing.AsyncTesting,
  serverComponent: ConceptPage.Testing.Testing,
}
