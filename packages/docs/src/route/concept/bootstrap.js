import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const bootstrapRoute = {
  path: conceptPagePath.bootstrap,
  clientComponent: ConceptPage.Bootstrap.AsyncBootstrap,
  serverComponent: ConceptPage.Bootstrap.Bootstrap,
}
