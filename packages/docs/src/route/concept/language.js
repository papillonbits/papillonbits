import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const languageRoute = {
  path: conceptPagePath.language,
  clientComponent: ConceptPage.Language.AsyncLanguage,
  serverComponent: ConceptPage.Language.Language,
}
