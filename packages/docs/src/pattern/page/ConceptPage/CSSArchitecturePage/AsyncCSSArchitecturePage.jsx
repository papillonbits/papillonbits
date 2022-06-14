import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './CSSArchitecturePage.prop'

const LazyCSSArchitecturePage = lazy(() => import('./CSSArchitecturePage'))

export function AsyncCSSArchitecturePage() {
  return (
    <Suspense fallback={null}>
      <LazyCSSArchitecturePage />
    </Suspense>
  )
}

AsyncCSSArchitecturePage.defaultProps = defaultProps

AsyncCSSArchitecturePage.propTypes = propTypes
