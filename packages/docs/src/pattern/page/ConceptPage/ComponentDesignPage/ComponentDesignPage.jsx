import { ConceptTemplate } from '../../../template/ConceptTemplate'
import { defaultProps, propTypes } from './ComponentDesignPage.prop'

export function ComponentDesignPage() {
  return <ConceptTemplate.ComponentDesign />
}

ComponentDesignPage.defaultProps = defaultProps

ComponentDesignPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default ComponentDesignPage
