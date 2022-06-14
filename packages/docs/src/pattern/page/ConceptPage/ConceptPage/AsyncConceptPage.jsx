import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ConceptPage.prop'

const LazyConceptPage = lazy(() => import('./ConceptPage'))

export function AsyncConceptPage() {
  return (
    <Suspense fallback={null}>
      <LazyConceptPage />
    </Suspense>
  )
}

AsyncConceptPage.defaultProps = defaultProps

AsyncConceptPage.propTypes = propTypes
