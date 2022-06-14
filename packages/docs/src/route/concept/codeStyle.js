import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const codeStyleRoute = {
  path: conceptPagePath.codeStyle,
  clientComponent: ConceptPage.CodeStyle.AsyncCodeStyle,
  serverComponent: ConceptPage.CodeStyle.CodeStyle,
}
