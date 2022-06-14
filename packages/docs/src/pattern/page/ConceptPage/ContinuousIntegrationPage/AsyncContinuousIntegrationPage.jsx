import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ContinuousIntegrationPage.prop'

const LazyContinuousIntegrationPage = lazy(() => import('./ContinuousIntegrationPage'))

export function AsyncContinuousIntegrationPage() {
  return (
    <Suspense fallback={null}>
      <LazyContinuousIntegrationPage />
    </Suspense>
  )
}

AsyncContinuousIntegrationPage.defaultProps = defaultProps

AsyncContinuousIntegrationPage.propTypes = propTypes
