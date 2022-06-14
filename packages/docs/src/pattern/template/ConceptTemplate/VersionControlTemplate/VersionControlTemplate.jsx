import { Fragment } from 'react'
import { defaultProps, propTypes } from './VersionControlTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './VersionControlTemplate.MainContent'

export function VersionControlTemplate() {
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

VersionControlTemplate.defaultProps = defaultProps

VersionControlTemplate.propTypes = propTypes
