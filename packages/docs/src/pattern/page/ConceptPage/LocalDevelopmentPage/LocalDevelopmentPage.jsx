import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './LocalDevelopmentPage.prop'

export function LocalDevelopmentPage() {
  return <ConceptTemplate.LocalDevelopment />
}

LocalDevelopmentPage.defaultProps = defaultProps

LocalDevelopmentPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default LocalDevelopmentPage
