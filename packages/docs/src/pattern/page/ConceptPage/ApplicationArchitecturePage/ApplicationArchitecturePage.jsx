import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './ApplicationArchitecturePage.prop'

export function ApplicationArchitecturePage() {
  return <ConceptTemplate.ApplicationArchitecture />
}

ApplicationArchitecturePage.defaultProps = defaultProps

ApplicationArchitecturePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ApplicationArchitecturePage
