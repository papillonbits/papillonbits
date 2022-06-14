import { ComponentsPage } from '../../pattern/page/ComponentsPage'
import { componentsPagePath } from '../path'

export const componentsRoute = {
  path: componentsPagePath.components,
  clientComponent: ComponentsPage.Components.AsyncComponents,
  serverComponent: ComponentsPage.Components.Components,
}
