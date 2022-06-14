import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './RenderingPage.prop'

const LazyRenderingPage = lazy(() => import('./RenderingPage'))

export function AsyncRenderingPage() {
  return (
    <Suspense fallback={null}>
      <LazyRenderingPage />
    </Suspense>
  )
}

AsyncRenderingPage.defaultProps = defaultProps

AsyncRenderingPage.propTypes = propTypes
