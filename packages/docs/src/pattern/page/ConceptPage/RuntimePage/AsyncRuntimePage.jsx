import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './RuntimePage.prop'

const LazyRuntimePage = lazy(() => import('./RuntimePage'))

export function AsyncRuntimePage() {
  return (
    <Suspense fallback={null}>
      <LazyRuntimePage />
    </Suspense>
  )
}

AsyncRuntimePage.defaultProps = defaultProps

AsyncRuntimePage.propTypes = propTypes
