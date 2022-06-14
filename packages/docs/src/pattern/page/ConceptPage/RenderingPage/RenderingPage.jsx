import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './RenderingPage.prop'

export function RenderingPage() {
  return <ConceptTemplate.Rendering />
}

RenderingPage.defaultProps = defaultProps

RenderingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default RenderingPage
