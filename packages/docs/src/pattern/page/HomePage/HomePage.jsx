import { HomeTemplate } from '../../template/HomeTemplate'
import { defaultProps, propTypes } from './HomePage.prop'

export function HomePage() {
  return <HomeTemplate />
}

HomePage.defaultProps = defaultProps

HomePage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default HomePage
