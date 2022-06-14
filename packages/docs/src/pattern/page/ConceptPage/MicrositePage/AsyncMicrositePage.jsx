import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MicrositePage.prop'

const LazyMicrositePage = lazy(() => import('./MicrositePage'))

export function AsyncMicrositePage() {
  return (
    <Suspense fallback={null}>
      <LazyMicrositePage />
    </Suspense>
  )
}

AsyncMicrositePage.defaultProps = defaultProps

AsyncMicrositePage.propTypes = propTypes
