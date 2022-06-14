import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const renderingRoute = {
  path: conceptPagePath.rendering,
  clientComponent: ConceptPage.Rendering.AsyncRendering,
  serverComponent: ConceptPage.Rendering.Rendering,
}
