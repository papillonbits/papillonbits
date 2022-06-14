import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './ContinuousDeliveryPage.prop'

export function ContinuousDeliveryPage() {
  return <ConceptTemplate.ContinuousDelivery />
}

ContinuousDeliveryPage.defaultProps = defaultProps

ContinuousDeliveryPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ContinuousDeliveryPage
