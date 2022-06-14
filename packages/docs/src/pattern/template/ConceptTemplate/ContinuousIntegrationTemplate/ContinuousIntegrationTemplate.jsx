import { Fragment } from 'react'
import { defaultProps, propTypes } from './ContinuousIntegrationTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ContinuousIntegrationTemplate.MainContent'

export function ContinuousIntegrationTemplate() {
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

ContinuousIntegrationTemplate.defaultProps = defaultProps

ContinuousIntegrationTemplate.propTypes = propTypes
