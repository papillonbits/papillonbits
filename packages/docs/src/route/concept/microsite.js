import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const micrositeRoute = {
  path: conceptPagePath.microsite,
  clientComponent: ConceptPage.Microsite.AsyncMicrosite,
  serverComponent: ConceptPage.Microsite.Microsite,
}
