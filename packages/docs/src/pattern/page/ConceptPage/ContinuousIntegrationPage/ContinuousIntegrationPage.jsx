import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './ContinuousIntegrationPage.prop'

export function ContinuousIntegrationPage() {
  return <ConceptTemplate.ContinuousIntegration />
}

ContinuousIntegrationPage.defaultProps = defaultProps

ContinuousIntegrationPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ContinuousIntegrationPage
