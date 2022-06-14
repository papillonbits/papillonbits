import { Fragment } from 'react'
import { defaultProps, propTypes } from './CrossBrowserCompatibilityTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CrossBrowserCompatibilityTemplate.MainContent'

export function CrossBrowserCompatibilityTemplate() {
  return (
    <Fragment>
      <Navigation />
      <div className="d-flex flex-wrap flex-lg-nowrap">
        <MainContent />
        <SideBar />
      </div>
    </Fragment>
  )
}

CrossBrowserCompatibilityTemplate.defaultProps = defaultProps

CrossBrowserCompatibilityTemplate.propTypes = propTypes
