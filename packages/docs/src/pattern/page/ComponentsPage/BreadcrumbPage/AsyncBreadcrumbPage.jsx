import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './BreadcrumbPage.prop'

const LazyBreadcrumbPage = lazy(() => import('./BreadcrumbPage'))

export function AsyncBreadcrumbPage() {
  return (
    <Suspense fallback={null}>
      <LazyBreadcrumbPage />
    </Suspense>
  )
}

AsyncBreadcrumbPage.defaultProps = defaultProps

AsyncBreadcrumbPage.propTypes = propTypes
