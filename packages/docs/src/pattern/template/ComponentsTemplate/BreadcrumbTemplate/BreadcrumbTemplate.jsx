import { Fragment } from 'react'
import { defaultProps, propTypes } from './BreadcrumbTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './BreadcrumbTemplate.MainContent'

export function BreadcrumbTemplate() {
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

BreadcrumbTemplate.defaultProps = defaultProps

BreadcrumbTemplate.propTypes = propTypes
