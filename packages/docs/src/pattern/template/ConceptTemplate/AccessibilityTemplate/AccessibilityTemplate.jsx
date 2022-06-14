import { Fragment } from 'react'
import { defaultProps, propTypes } from './AccessibilityTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './AccessibilityTemplate.MainContent'

export function AccessibilityTemplate() {
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

AccessibilityTemplate.defaultProps = defaultProps

AccessibilityTemplate.propTypes = propTypes
