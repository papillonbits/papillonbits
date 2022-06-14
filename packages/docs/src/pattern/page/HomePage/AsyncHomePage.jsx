import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './HomePage.prop'

const LazyHomePage = lazy(() => import('./HomePage'))

export function AsyncHomePage() {
  return (
    <Suspense fallback={null}>
      <LazyHomePage />
    </Suspense>
  )
}

AsyncHomePage.defaultProps = defaultProps

AsyncHomePage.propTypes = propTypes
