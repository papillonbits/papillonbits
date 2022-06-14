import { AsyncHomePage, HomePage } from '../pattern/page/HomePage'
import { homePagePath } from './path'

export const homePageRoute = {
  path: homePagePath,
  clientComponent: AsyncHomePage,
  serverComponent: HomePage,
}
