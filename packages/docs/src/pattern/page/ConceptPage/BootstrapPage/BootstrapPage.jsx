import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './BootstrapPage.prop'

export function BootstrapPage() {
  return <ConceptTemplate.Bootstrap />
}

BootstrapPage.defaultProps = defaultProps

BootstrapPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BootstrapPage
