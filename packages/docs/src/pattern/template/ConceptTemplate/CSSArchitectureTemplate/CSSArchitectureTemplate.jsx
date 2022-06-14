import { Fragment } from 'react'
import { defaultProps, propTypes } from './CSSArchitectureTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CSSArchitectureTemplate.MainContent'

export function CSSArchitectureTemplate() {
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

CSSArchitectureTemplate.defaultProps = defaultProps

CSSArchitectureTemplate.propTypes = propTypes
