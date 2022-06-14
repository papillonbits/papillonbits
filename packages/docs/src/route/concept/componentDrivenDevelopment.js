import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const componentDrivenDevelopmentRoute = {
  path: conceptPagePath.componentDrivenDevelopment,
  clientComponent: ConceptPage.ComponentDrivenDevelopment.AsyncComponentDrivenDevelopment,
  serverComponent: ConceptPage.ComponentDrivenDevelopment.ComponentDrivenDevelopment,
}
