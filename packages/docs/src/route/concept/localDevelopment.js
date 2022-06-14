import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const localDevelopmentRoute = {
  path: conceptPagePath.localDevelopment,
  clientComponent: ConceptPage.LocalDevelopment.AsyncLocalDevelopment,
  serverComponent: ConceptPage.LocalDevelopment.LocalDevelopment,
}
