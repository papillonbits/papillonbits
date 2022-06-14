import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ComponentDrivenDevelopmentPage.prop'

const LazyComponentDrivenDevelopmentPage = lazy(() => import('./ComponentDrivenDevelopmentPage'))

export function AsyncComponentDrivenDevelopmentPage() {
  return (
    <Suspense fallback={null}>
      <LazyComponentDrivenDevelopmentPage />
    </Suspense>
  )
}

AsyncComponentDrivenDevelopmentPage.defaultProps = defaultProps

AsyncComponentDrivenDevelopmentPage.propTypes = propTypes
