import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './RoutingPage.prop'

export function RoutingPage() {
  return <ConceptTemplate.Routing />
}

RoutingPage.defaultProps = defaultProps

RoutingPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default RoutingPage
