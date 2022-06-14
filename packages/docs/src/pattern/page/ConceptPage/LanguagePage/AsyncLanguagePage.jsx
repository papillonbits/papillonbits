import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './LanguagePage.prop'

const LazyLanguagePage = lazy(() => import('./LanguagePage'))

export function AsyncLanguagePage() {
  return (
    <Suspense fallback={null}>
      <LazyLanguagePage />
    </Suspense>
  )
}

AsyncLanguagePage.defaultProps = defaultProps

AsyncLanguagePage.propTypes = propTypes
