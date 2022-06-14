import { NotFoundTemplate } from '../../template/NotFoundTemplate'
import { defaultProps, propTypes } from './NotFoundPage.prop'

export function NotFoundPage() {
  return <NotFoundTemplate />
}

NotFoundPage.defaultProps = defaultProps

NotFoundPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default NotFoundPage
