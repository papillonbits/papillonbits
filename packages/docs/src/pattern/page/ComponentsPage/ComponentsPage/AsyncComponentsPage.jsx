import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ComponentsPage.prop'

const LazyComponentsPage = lazy(() => import('./ComponentsPage'))

export function AsyncComponentsPage() {
  return (
    <Suspense fallback={null}>
      <LazyComponentsPage />
    </Suspense>
  )
}

AsyncComponentsPage.defaultProps = defaultProps

AsyncComponentsPage.propTypes = propTypes
