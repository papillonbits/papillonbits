import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BootstrapPage.prop'

const LazyBootstrapPage = lazy(() => import('./BootstrapPage'))

export function AsyncBootstrapPage() {
  return (
    <Suspense fallback={null}>
      <LazyBootstrapPage />
    </Suspense>
  )
}

AsyncBootstrapPage.defaultProps = defaultProps

AsyncBootstrapPage.propTypes = propTypes
