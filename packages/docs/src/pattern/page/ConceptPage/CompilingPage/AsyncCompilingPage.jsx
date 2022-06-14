import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './CompilingPage.prop'

const LazyCompilingPage = lazy(() => import('./CompilingPage'))

export function AsyncCompilingPage() {
  return (
    <Suspense fallback={null}>
      <LazyCompilingPage />
    </Suspense>
  )
}

AsyncCompilingPage.defaultProps = defaultProps

AsyncCompilingPage.propTypes = propTypes
