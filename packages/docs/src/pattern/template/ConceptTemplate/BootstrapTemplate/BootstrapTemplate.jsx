import { Fragment } from 'react'
import { defaultProps, propTypes } from './BootstrapTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BootstrapTemplate.MainContent'

export function BootstrapTemplate() {
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

BootstrapTemplate.defaultProps = defaultProps

BootstrapTemplate.propTypes = propTypes
