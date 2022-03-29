import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../.jest-test-results.json'

const Label =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Label
    : require('../../../../build').primer.Label

export default {
  title: 'Primer/Atom/Label',
  component: Label,
  decorators: [withTests({ results })],
  parameters: { jest: ['Label.int.test.js'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Label text="default label" />
}
