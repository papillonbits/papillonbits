import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './CrossBrowserCompatibilityPage.prop'

export function CrossBrowserCompatibilityPage() {
  return <ConceptTemplate.CrossBrowserCompatibility />
}

CrossBrowserCompatibilityPage.defaultProps = defaultProps

CrossBrowserCompatibilityPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default CrossBrowserCompatibilityPage
