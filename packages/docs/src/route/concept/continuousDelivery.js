import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const continuousDeliveryRoute = {
  path: conceptPagePath.continuousDelivery,
  clientComponent: ConceptPage.ContinuousDelivery.AsyncContinuousDelivery,
  serverComponent: ConceptPage.ContinuousDelivery.ContinuousDelivery,
}
