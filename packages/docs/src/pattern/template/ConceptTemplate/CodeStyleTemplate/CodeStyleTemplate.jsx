import { Fragment } from 'react'
import { defaultProps, propTypes } from './CodeStyleTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './CodeStyleTemplate.MainContent'

export function CodeStyleTemplate() {
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

CodeStyleTemplate.defaultProps = defaultProps

CodeStyleTemplate.propTypes = propTypes
