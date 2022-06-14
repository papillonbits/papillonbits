import { Fragment } from 'react'
import { defaultProps, propTypes } from './TestingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './TestingTemplate.MainContent'

export function TestingTemplate() {
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

TestingTemplate.defaultProps = defaultProps

TestingTemplate.propTypes = propTypes
