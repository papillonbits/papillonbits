import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './LocalDevelopmentPage.prop'

const LazyLocalDevelopmentPage = lazy(() => import('./LocalDevelopmentPage'))

export function AsyncLocalDevelopmentPage() {
  return (
    <Suspense fallback={null}>
      <LazyLocalDevelopmentPage />
    </Suspense>
  )
}

AsyncLocalDevelopmentPage.defaultProps = defaultProps

AsyncLocalDevelopmentPage.propTypes = propTypes
