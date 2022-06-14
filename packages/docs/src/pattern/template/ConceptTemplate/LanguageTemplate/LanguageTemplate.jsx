import { Fragment } from 'react'
import { defaultProps, propTypes } from './LanguageTemplate.prop'
import { Navigation } from '../../../molecule/Navigation'
import { SideBar } from '../../../molecule/SideBar'
import { MainContent } from './LanguageTemplate.MainContent'

export function LanguageTemplate() {
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

LanguageTemplate.defaultProps = defaultProps

LanguageTemplate.propTypes = propTypes
