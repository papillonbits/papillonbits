import { ComponentsTemplate } from '../../../template/ComponentsTemplate'
import { defaultProps, propTypes } from './BreadcrumbPage.prop'

export function BreadcrumbPage() {
  return <ComponentsTemplate.Breadcrumb />
}

BreadcrumbPage.defaultProps = defaultProps

BreadcrumbPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default BreadcrumbPage
