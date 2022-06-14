import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './ComponentsPage.prop'

export function ComponentsPage() {
  return <ComponentsTemplate.Components />
}

ComponentsPage.defaultProps = defaultProps

ComponentsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ComponentsPage
