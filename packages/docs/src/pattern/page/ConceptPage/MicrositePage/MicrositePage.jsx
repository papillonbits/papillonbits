import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './MicrositePage.prop'

export function MicrositePage() {
  return <ConceptTemplate.Microsite />
}

MicrositePage.defaultProps = defaultProps

MicrositePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MicrositePage
