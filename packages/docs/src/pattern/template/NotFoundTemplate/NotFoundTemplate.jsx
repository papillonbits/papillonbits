import { Link } from 'react-router-dom'
import { primer } from '@papillonbits/components'
import { homePagePath } from '../../../route/path'
import { defaultProps, propTypes } from './NotFoundTemplate.prop'

const {
  Alert: { Alert, alertVariant },
} = primer

export function NotFoundTemplate() {
  return (
    <Alert className={alert} variant={alertVariant.error}>
      {`No match for route. Return to `}
      <Link to={homePagePath}>home page.</Link>
    </Alert>
  )
}

NotFoundTemplate.defaultProps = defaultProps

NotFoundTemplate.propTypes = propTypes
