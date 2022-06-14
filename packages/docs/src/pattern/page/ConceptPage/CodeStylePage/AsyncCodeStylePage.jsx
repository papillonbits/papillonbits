import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './CodeStylePage.prop'

const LazyCodeStylePage = lazy(() => import('./CodeStylePage'))

export function AsyncCodeStylePage() {
  return (
    <Suspense fallback={null}>
      <LazyCodeStylePage />
    </Suspense>
  )
}

AsyncCodeStylePage.defaultProps = defaultProps

AsyncCodeStylePage.propTypes = propTypes
