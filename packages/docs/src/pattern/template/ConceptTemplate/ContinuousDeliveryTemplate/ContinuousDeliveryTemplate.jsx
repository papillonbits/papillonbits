import { Fragment } from 'react'
import { defaultProps, propTypes } from './ContinuousDeliveryTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ContinuousDeliveryTemplate.MainContent'

export function ContinuousDeliveryTemplate() {
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

ContinuousDeliveryTemplate.defaultProps = defaultProps

ContinuousDeliveryTemplate.propTypes = propTypes
