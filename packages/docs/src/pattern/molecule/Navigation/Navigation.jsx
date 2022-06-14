import { Link } from 'react-router-dom'
import { defaultProps, propTypes } from './Navigation.prop'
import { homePagePath } from '../../../route/path'

export function Navigation() {
  return (
    <div
      className="bg-gray-dark"
      style={{
        position: '-webkit-sticky',
        position: 'sticky', // eslint-disable-line
        top: 0,
        left: 0,
        right: 0,
        zIndex: 101,
      }}
    >
      <div
        className="main-nav d-flex flex-justify-between px-3 pl-md-4 pr-md-4 py-3 box-shadow bg-gray-dark Details js-details-container"
        data-pjax="#js-pjax-container"
      >
        <div className="d-flex flex-self-center flex-lg-auto mr-lg-2">
          <div className="flex-self-center Details-content--shown">
            <div className="dropdown js-menu-container js-select-menu">
              <h1 className="h4 text-normal mt-1">
                <button className="btn-link text-white link-white no-underline" type="button" aria-haspopup="true" aria-expanded="false">
                  <Link className="position-relative f4 d-block text-white" to={homePagePath}>
                    Home
                  </Link>
                </button>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Navigation.defaultProps = defaultProps

Navigation.propTypes = propTypes
