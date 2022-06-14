import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './CSSArchitecturePage.prop'

export function CSSArchitecturePage() {
  return <ConceptTemplate.CSSArchitecture />
}

CSSArchitecturePage.defaultProps = defaultProps

CSSArchitecturePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default CSSArchitecturePage
