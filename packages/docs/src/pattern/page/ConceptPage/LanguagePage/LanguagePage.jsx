import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './LanguagePage.prop'

export function LanguagePage() {
  return <ConceptTemplate.Language />
}

LanguagePage.defaultProps = defaultProps

LanguagePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default LanguagePage
