import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './CrossBrowserCompatibilityPage.prop'

const LazyCrossBrowserCompatibilityPage = lazy(() => import('./CrossBrowserCompatibilityPage'))

export function AsyncCrossBrowserCompatibilityPage() {
  return (
    <Suspense fallback={null}>
      <LazyCrossBrowserCompatibilityPage />
    </Suspense>
  )
}

AsyncCrossBrowserCompatibilityPage.defaultProps = defaultProps

AsyncCrossBrowserCompatibilityPage.propTypes = propTypes
