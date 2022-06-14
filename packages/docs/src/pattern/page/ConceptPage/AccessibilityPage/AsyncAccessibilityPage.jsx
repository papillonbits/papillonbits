import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './AccessibilityPage.prop'

const LazyAccessibilityPage = lazy(() => import('./AccessibilityPage'))

export function AsyncAccessibilityPage() {
  return (
    <Suspense fallback={null}>
      <LazyAccessibilityPage />
    </Suspense>
  )
}

AsyncAccessibilityPage.defaultProps = defaultProps

AsyncAccessibilityPage.propTypes = propTypes
