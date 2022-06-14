import { lazy, Suspense } from 'react'
import { defaultProps, propTypes } from './ComponentDesignPage.prop'

const LazyComponentDesignPage = lazy(() => import('./ComponentDesignPage'))

export function AsyncComponentDesignPage() {
  return (
    <Suspense fallback={null}>
      <LazyComponentDesignPage />
    </Suspense>
  )
}

AsyncComponentDesignPage.defaultProps = defaultProps

AsyncComponentDesignPage.propTypes = propTypes
