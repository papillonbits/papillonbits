import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './CompilingPage.prop'

export function CompilingPage() {
  return <ConceptTemplate.Compiling />
}

CompilingPage.defaultProps = defaultProps

CompilingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default CompilingPage
