import { ConceptPage } from '../../pattern/page/ConceptPage'
import { conceptPagePath } from '../path'

export const versionControlRoute = {
  path: conceptPagePath.versionControl,
  clientComponent: ConceptPage.VersionControl.AsyncVersionControl,
  serverComponent: ConceptPage.VersionControl.VersionControl,
}
