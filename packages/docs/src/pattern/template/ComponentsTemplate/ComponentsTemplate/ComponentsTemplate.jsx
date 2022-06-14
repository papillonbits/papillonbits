import { Fragment } from 'react'
import { defaultProps, propTypes } from './ComponentsTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ComponentsTemplate.MainContent'

export function ComponentsTemplate() {
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

ComponentsTemplate.defaultProps = defaultProps

ComponentsTemplate.propTypes = propTypes
