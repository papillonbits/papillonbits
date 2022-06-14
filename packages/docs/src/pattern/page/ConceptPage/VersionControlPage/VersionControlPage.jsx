import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './VersionControlPage.prop'

export function VersionControlPage() {
  return <ConceptTemplate.VersionControl />
}

VersionControlPage.defaultProps = defaultProps

VersionControlPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default VersionControlPage
