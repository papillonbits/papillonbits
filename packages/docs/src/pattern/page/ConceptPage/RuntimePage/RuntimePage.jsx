import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './RuntimePage.prop'

export function RuntimePage() {
  return <ConceptTemplate.Runtime />
}

RuntimePage.defaultProps = defaultProps

RuntimePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default RuntimePage
