import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ApplicationArchitecturePage.prop'

const LazyApplicationArchitecturePage = lazy(() => import('./ApplicationArchitecturePage'))

export function AsyncApplicationArchitecturePage() {
  return (
    <Suspense fallback={null}>
      <LazyApplicationArchitecturePage />
    </Suspense>
  )
}

AsyncApplicationArchitecturePage.defaultProps = defaultProps

AsyncApplicationArchitecturePage.propTypes = propTypes
