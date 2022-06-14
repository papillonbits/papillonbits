import { Fragment } from 'react'
import { defaultProps, propTypes } from './RenderingTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './RenderingTemplate.MainContent'

export function RenderingTemplate() {
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

RenderingTemplate.defaultProps = defaultProps

RenderingTemplate.propTypes = propTypes
