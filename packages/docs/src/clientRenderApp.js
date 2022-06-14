/* eslint-disable import/no-import-module-exports */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { checkAccessibilityIssues } from '@papillonbits/library/a11y'
import { primer } from '@papillonbits/components'
import { NotAuthorized, isUserAuthenticatedPapillonBitsOrganizationMember } from '@papillonbits/library/auth'
import { homePageRoute, conceptPageRoute, componentsPageRoute, notFoundPageRoute } from './route'

const currentHost = window.location.href.split('://')[1].split('-')[0].split(':')[0]
const localHost = 'localhost'
const isRunningOnLocalHost = currentHost === localHost

/* istanbul ignore next */
export function App() {
  const { ErrorBoundary } = primer

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path={homePageRoute.path} element={homePageRoute.clientComponent()} />
          <Route path={conceptPageRoute.concept.path} element={conceptPageRoute.concept.clientComponent()} />
          <Route path={conceptPageRoute.accessibility.path} element={conceptPageRoute.accessibility.clientComponent()} />
          <Route
            path={conceptPageRoute.applicationArchitecture.path}
            element={conceptPageRoute.applicationArchitecture.clientComponent()}
          />
          <Route path={conceptPageRoute.bootstrap.path} element={conceptPageRoute.bootstrap.clientComponent()} />
          <Route path={conceptPageRoute.codeStyle.path} element={conceptPageRoute.codeStyle.clientComponent()} />
          <Route path={conceptPageRoute.compiling.path} element={conceptPageRoute.compiling.clientComponent()} />
          <Route path={conceptPageRoute.componentDesign.path} element={conceptPageRoute.componentDesign.clientComponent()} />
          <Route
            path={conceptPageRoute.componentDrivenDevelopment.path}
            element={conceptPageRoute.componentDrivenDevelopment.clientComponent()}
          />
          <Route path={conceptPageRoute.continuousDelivery.path} element={conceptPageRoute.continuousDelivery.clientComponent()} />
          <Route path={conceptPageRoute.continuousIntegration.path} element={conceptPageRoute.continuousIntegration.clientComponent()} />
          <Route
            path={conceptPageRoute.crossBrowserCompatibility.path}
            element={conceptPageRoute.crossBrowserCompatibility.clientComponent()}
          />
          <Route path={conceptPageRoute.cssArchitecture.path} element={conceptPageRoute.cssArchitecture.clientComponent()} />
          <Route path={conceptPageRoute.language.path} element={conceptPageRoute.language.clientComponent()} />
          <Route path={conceptPageRoute.localDevelopment.path} element={conceptPageRoute.localDevelopment.clientComponent()} />
          <Route path={conceptPageRoute.microsite.path} element={conceptPageRoute.microsite.clientComponent()} />
          <Route path={conceptPageRoute.monorepo.path} element={conceptPageRoute.monorepo.clientComponent()} />
          <Route path={conceptPageRoute.rendering.path} element={conceptPageRoute.rendering.clientComponent()} />
          <Route path={conceptPageRoute.routing.path} element={conceptPageRoute.routing.clientComponent()} />
          <Route path={conceptPageRoute.runtime.path} element={conceptPageRoute.runtime.clientComponent()} />
          <Route path={conceptPageRoute.testing.path} element={conceptPageRoute.testing.clientComponent()} />
          <Route path={conceptPageRoute.versionControl.path} element={conceptPageRoute.versionControl.clientComponent()} />
          <Route path={componentsPageRoute.components.path} element={componentsPageRoute.components.clientComponent()} />
          <Route path={componentsPageRoute.breadcrumb.path} element={componentsPageRoute.breadcrumb.clientComponent()} />
          <Route path="*" element={notFoundPageRoute.clientComponent()} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

/* istanbul ignore next */
function renderApp() {
  checkAccessibilityIssues(React, ReactDOM, 1000)

  ReactDOM.hydrateRoot(document.getElementById('app'), <App />)

  if (module.hot) {
    module.hot.accept()
  }
}

/* istanbul ignore next */
function renderNotauthorized() {
  ReactDOM.hydrateRoot(document.getElementById('app'), <NotAuthorized />)
}

/* istanbul ignore next */
if (!isRunningOnLocalHost) {
  isUserAuthenticatedPapillonBitsOrganizationMember().then((isActivepapillonbitsMember) => {
    if (isActivepapillonbitsMember) {
      renderApp()
    } else {
      renderNotauthorized()
    }
  })
} else {
  renderApp()
}
