import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './MonorepoPage.prop'

export function MonorepoPage() {
  return <ConceptTemplate.Monorepo />
}

MonorepoPage.defaultProps = defaultProps

MonorepoPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MonorepoPage
