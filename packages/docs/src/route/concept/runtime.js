import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const runtimeRoute = {
  path: conceptPagePath.runtime,
  clientComponent: ConceptPage.Runtime.AsyncRuntime,
  serverComponent: ConceptPage.Runtime.Runtime,
}
