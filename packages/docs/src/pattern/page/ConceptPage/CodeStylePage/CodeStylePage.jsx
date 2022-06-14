import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './CodeStylePage.prop'

export function CodeStylePage() {
  return <ConceptTemplate.CodeStyle />
}

CodeStylePage.defaultProps = defaultProps

CodeStylePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default CodeStylePage
