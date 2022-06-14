import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './ComponentDrivenDevelopmentPage.prop'

export function ComponentDrivenDevelopmentPage() {
  return <ConceptTemplate.ComponentDrivenDevelopment />
}

ComponentDrivenDevelopmentPage.defaultProps = defaultProps

ComponentDrivenDevelopmentPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ComponentDrivenDevelopmentPage
