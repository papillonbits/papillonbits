import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const continuousIntegrationRoute = {
  path: conceptPagePath.continuousIntegration,
  clientComponent: ConceptPage.ContinuousIntegration.AsyncContinuousIntegration,
  serverComponent: ConceptPage.ContinuousIntegration.ContinuousIntegration,
}
