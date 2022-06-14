import { Fragment } from 'react'
import { defaultProps, propTypes } from './ConceptTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './ConceptTemplate.MainContent'

export function ConceptTemplate() {
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

ConceptTemplate.defaultProps = defaultProps

ConceptTemplate.propTypes = propTypes
