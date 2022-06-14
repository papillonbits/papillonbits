import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './TestingPage.prop'

export function TestingPage() {
  return <ConceptTemplate.Testing />
}

TestingPage.defaultProps = defaultProps

TestingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default TestingPage
