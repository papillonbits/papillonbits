import { withTests } from '@storybook/addon-jest'
import results from '../../../../../../.jest-test-results.json'

const Subhead =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Subhead
    : require('../../../../build').primer.Subhead

export default {
  title: 'Primer/Atom/Subhead',
  component: Subhead,
  decorators: [withTests({ results })],
  parameters: { jest: ['Subhead.int.test.js'] },
  excludeStories: ['custom'],
}

export function plain() {
  return <Subhead heading="Plain subhead" />
}

export function spacious() {
  return <Subhead heading="Spacious subhead" isSpacious={true} />
}
