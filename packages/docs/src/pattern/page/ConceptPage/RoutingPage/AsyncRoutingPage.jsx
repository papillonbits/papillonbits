import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './RoutingPage.prop'

const LazyRoutingPage = lazy(() => import('./RoutingPage'))

export function AsyncRoutingPage() {
  return (
    <Suspense fallback={null}>
      <LazyRoutingPage />
    </Suspense>
  )
}

AsyncRoutingPage.defaultProps = defaultProps

AsyncRoutingPage.propTypes = propTypes
