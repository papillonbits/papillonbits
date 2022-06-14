import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './TestingPage.prop'

const LazyTestingPage = lazy(() => import('./TestingPage'))

export function AsyncTestingPage() {
  return (
    <Suspense fallback={null}>
      <LazyTestingPage />
    </Suspense>
  )
}

AsyncTestingPage.defaultProps = defaultProps

AsyncTestingPage.propTypes = propTypes
