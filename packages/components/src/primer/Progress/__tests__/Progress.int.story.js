import { withTests } from '@storybook/addon-jest'
import { progressVariant } from '../Progress.prop'
import results from '../../../../../../.jest-test-results.json'

const Progress =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Progress.Progress
    : require('../../../../build').primer.Progress.Progress

export default {
  title: 'Primer/Atom/Progress',
  component: Progress,
  decorators: [withTests({ results })],
  parameters: { jest: ['Progress.int.test.js'] },
  excludeStories: ['custom'],
}

export function normal() {
  return <Progress variant={progressVariant.normal} percentage={50} />
}

export function large() {
  return <Progress variant={progressVariant.large} percentage={50} />
}

export function small() {
  return <Progress variant={progressVariant.small} percentage={50} />
}
