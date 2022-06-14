import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './MonorepoPage.prop'

const LazyMonorepoPage = lazy(() => import('./MonorepoPage'))

export function AsyncMonorepoPage() {
  return (
    <Suspense fallback={null}>
      <LazyMonorepoPage />
    </Suspense>
  )
}

AsyncMonorepoPage.defaultProps = defaultProps

AsyncMonorepoPage.propTypes = propTypes
