import { Fragment } from 'react'
import { defaultProps, propTypes } from './HomeTemplate.prop'
import { Navigation } from '../../molecule/Navigation'
import { SideBar } from '../../molecule/SideBar'
import { MainContent } from './HomeTemplate.MainContent'

export function HomeTemplate() {
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

HomeTemplate.defaultProps = defaultProps

HomeTemplate.propTypes = propTypes
