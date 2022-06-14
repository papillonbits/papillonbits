import { Fragment } from 'react'
import { defaultProps, propTypes } from './MicrositeTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './MicrositeTemplate.MainContent'

export function MicrositeTemplate() {
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

MicrositeTemplate.defaultProps = defaultProps

MicrositeTemplate.propTypes = propTypes
