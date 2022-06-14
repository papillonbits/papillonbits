import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const conceptRoute = {
  path: conceptPagePath.concept,
  clientComponent: ConceptPage.Concept.AsyncConcept,
  serverComponent: ConceptPage.Concept.Concept,
}
