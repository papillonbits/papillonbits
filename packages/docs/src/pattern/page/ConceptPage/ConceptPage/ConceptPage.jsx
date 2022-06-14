import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './ConceptPage.prop'

export function ConceptPage() {
  return <ConceptTemplate.Concept />
}

ConceptPage.defaultProps = defaultProps

ConceptPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ConceptPage
