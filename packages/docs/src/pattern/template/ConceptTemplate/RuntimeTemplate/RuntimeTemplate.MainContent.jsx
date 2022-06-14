import { Link } from 'react-router-dom'
import { primer } from '@papillonbits/components'
import { homePageRoute, conceptPageRoute } from '../../../../route'

export function MainContent() {
  const {
    Concept: { Runtime },
  } = primer

  return (
    <main className="flex-row flex-lg-column main-content mt-4 mt-lg-6 pb-6 mx-auto px-3">
      <div className="clearfix">
        <nav aria-label="Breadcrumb" data-pjax="">
          <ol>
            <li className="breadcrumb-item text-small">
              <Link to={homePageRoute.path}>Home</Link>
            </li>

            <li className="breadcrumb-item text-small">
              <Link to={conceptPageRoute.concept.path}>Concept</Link>
            </li>

            <li className="breadcrumb-item text-small breadcrumb-item-selected">Runtime</li>
          </ol>
        </nav>
        <h1 className="f00-light border-0 pb-3 d-block v-align-middle mt-2">📚 Runtime</h1>
        <Runtime.SpecificationsStandardsGuidelines className="markdown-body pb-3" />
        <Runtime.OpenSourceDependencyProjects className="markdown-body pb-3" />
        <Runtime.Implementation.DesignSystemCore className="markdown-body pb-3" />
      </div>
    </main>
  )
}
