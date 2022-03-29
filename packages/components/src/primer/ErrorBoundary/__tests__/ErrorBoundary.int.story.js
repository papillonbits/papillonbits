import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../.jest-test-results.json'

const ErrorBoundary =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.ErrorBoundary
    : require('../../../../build').primer.ErrorBoundary

export default {
  title: 'Primer/Molecule/ErrorBoundary',
  component: ErrorBoundary,
  decorators: [withTests({ results })],
  parameters: { jest: ['ErrorBoundary.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return (
    <ErrorBoundary>
      <div />
    </ErrorBoundary>
  )
}
