import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './AccessibilityPage.prop'

export function AccessibilityPage() {
  return <ConceptTemplate.Accessibility />
}

AccessibilityPage.defaultProps = defaultProps

AccessibilityPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default AccessibilityPage
