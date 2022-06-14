import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './VersionControlPage.prop'

const LazyVersionControlPage = lazy(() => import('./VersionControlPage'))

export function AsyncVersionControlPage() {
  return (
    <Suspense fallback={null}>
      <LazyVersionControlPage />
    </Suspense>
  )
}

AsyncVersionControlPage.defaultProps = defaultProps

AsyncVersionControlPage.propTypes = propTypes
