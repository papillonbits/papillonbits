import { Link } from 'react-router-dom'
import { defaultProps, propTypes } from './SideBar.prop'
import { conceptPageRoute, componentsPageRoute } from '../../../route'

export function SideBar() {
  return (
    <nav id="navigation" className="sidebar flex-column flex-justify-start overflow-auto border-right bg-gray-light pb-4" data-pjax="">
      <ul className="list-style-none">
        <li className="px-4 my-4">
          <Link className="position-relative f4 d-block text-gray-dark text-bold" to={conceptPageRoute.concept.path}>
            Concept
          </Link>

          <ul className="pt-2 list-style-none">
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.accessibility.path}>
                Accessibility
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.applicationArchitecture.path}>
                Application Architecture
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.bootstrap.path}>
                Bootstrap
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.codeStyle.path}>
                Code Style
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.compiling.path}>
                Compiling
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.componentDesign.path}>
                Component Design
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.componentDrivenDevelopment.path}>
                Component Driven Development
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.continuousDelivery.path}>
                Continuous Delivery
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.continuousIntegration.path}>
                Continuous Integration
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.crossBrowserCompatibility.path}>
                Cross Browser Compatibility
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.cssArchitecture.path}>
                CSS Architecture
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.language.path}>
                Language
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.localDevelopment.path}>
                Local Development
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.microsite.path}>
                Microsite
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.monorepo.path}>
                Monorepo
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.rendering.path}>
                Rendering
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.routing.path}>
                Routing
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.runtime.path}>
                Runtime
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.testing.path}>
                Testing
              </Link>
            </li>
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={conceptPageRoute.versionControl.path}>
                Version Control
              </Link>
            </li>
          </ul>
        </li>
        <li className="mt-4 border-bottom" />

        <li className="px-4 my-4">
          <Link className="position-relative f4 d-block text-gray-dark text-bold" to={componentsPageRoute.components.path}>
            Components
          </Link>

          <ul className="pt-2 list-style-none">
            <li className="">
              <Link className="position-relative f5 py-1 d-block" to={componentsPageRoute.breadcrumb.path}>
                Breadcrumb
              </Link>
            </li>
          </ul>
        </li>
        <li className="mt-4 border-bottom" />
      </ul>
    </nav>
  )
}

SideBar.defaultProps = defaultProps

SideBar.propTypes = propTypes
