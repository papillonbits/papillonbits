import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ContinuousDeliveryPage.prop'

const LazyContinuousDeliveryPage = lazy(() => import('./ContinuousDeliveryPage'))

export function AsyncContinuousDeliveryPage() {
  return (
    <Suspense fallback={null}>
      <LazyContinuousDeliveryPage />
    </Suspense>
  )
}

AsyncContinuousDeliveryPage.defaultProps = defaultProps

AsyncContinuousDeliveryPage.propTypes = propTypes
